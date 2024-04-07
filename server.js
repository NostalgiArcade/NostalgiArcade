const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;
const cors = require('cors');
const uuid = require('uuid'); // Import the UUID library

// Connect to Redis
const options = {
    origin: "http://127.0.0.1:5500" // Allow our frontend to call this backend
};

const Redis = require("redis");
const redisClient = Redis.createClient({ url: `redis://localhost:6379` });

redisClient.on("connect", () => {
    console.log("Connection to Redis established");
});

// Helper function to check if user exists in Redis
function checkUsers(email, callback) {
    redisClient.exists(email, (err, reply) => {
        if (err) {
            console.error('Error checking user existence in Redis:', err);
            return callback(err, null);
        }
        callback(null, reply === 1);
    });
}

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files (like HTML, CSS, and client-side JavaScript)
app.use(express.static('public'));

// Middleware to validate session
app.use((req, res, next) => {
    const sessionToken = req.headers['x-session-token']; // Assuming you send the token in the header
    if (!sessionToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Check if the session token exists in Redis
    redisClient.get(sessionToken, (err, reply) => {
        if (err) {
            console.error('Error checking session token in Redis:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (!reply) {
            return res.status(401).json({ message: 'Session expired or invalid' });
        }
        // Valid session, proceed to the next middleware
        next();
    });
});

// Endpoint to handle signup requests
app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the email already exists
        const emailExists = await checkUsers(email);
        if (emailExists) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Create the user object
        const user = {
            username: username,
            email: email,
            // You might want to hash the password before storing it
            // password: hashPassword(password)
        };

        // Store the user data in Redis
        const userKey = `user:${username}`;
        await redisClient.set(userKey, JSON.stringify(user));

        // Generate a session token
        const sessionToken = uuid.v4(); // Generate a UUID (you can adjust this as needed)

        // Store the session token in Redis (with an expiration time)
        redisClient.setex(sessionToken, 3600, userKey); // Expires in 1 hour

        // Respond to the client
        res.status(200).json({ message: 'Signup successful', sessionToken: sessionToken });

    } catch (error) {
        console.error('Error during sign-up:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Other routes and middleware go here...

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
