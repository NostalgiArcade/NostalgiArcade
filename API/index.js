const express = require('./node_modules/express');
const mongoose = require('./node_modules/mongoose');
const bcrypt = require('./node_modules/bcrypt');

require('dotenv').config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const app = express();
const port = 3000;

const cors = require('./node_modules/cors');
app.use(cors());

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.iytvdn7.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const userSchema = new mongoose.Schema({
    email: String,
    hashedPassword: String,
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ email, hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error'});
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if(user){
            // Compare the provided password with the stored hashed password
            const passwordMatch = await bcrypt.compare(password, user.hashedPassword);

            if (passwordMatch) {
                // Login successful
                res.status(200).json({ message: 'Login successful' });
            } else {
                // Invalid password
                res.status(401).json({ error: 'Invalid credentials '});
            }
        } else {
            // User not found
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
