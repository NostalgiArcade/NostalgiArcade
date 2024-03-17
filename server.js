const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;
const cors = require('cors');
//connect to redis 
const options ={
    origin:"http://127.0.0.1:5500"//allow our fronend to call this backend 
}

const Redis = require("redis");//import the redis class from the library
// Habilitar CORS para todos los orígenes
app.use(cors(options));//allow frontend to call backend

// Resto de tu configuración de Express y rutas aquí...
const redisClient = Redis.createClient(
    {url : `redis://localhost:6379`}
);
redisClient.on("connect", ()=>{
    console.log("Connection to Redis yes")
})

// Helper function to check if user exists in Redis
function checkUsers(email, callback) {
    redisClient.exists(email, (err, reply) => {
        if (err) {
            console.error('Error checking user existence in Redis:', err);
            callback(err, null);
            return;
        }
        callback(null, reply === 1);
    });
}
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files (like HTML, CSS, and client-side JavaScript)
app.use(express.static('public'));

// Endpoint to handle signup requests
app.post('/signup', async (req, res) => {
    try {
        const {
            username,
            email,
            password
        } = req.body;
  
        const user = {
            username,
            email,
            password
        };
  
       
        const userKey = `user:${username}`;
        await redisClient.json.set(userKey, '.', user);
        res.status(200).json({ message: 'User successfully stored in Redis' });
  
    } catch (error) {
        console.error('Error storing payment in Redis:', error);
        res.status(500).json({ error: 'Internal server error' });
    }


});

app.get('/users', async (req, res) => {
    try {
      const paymentKeys = await redisClient.keys('user:*');
  
      const payments = await Promise.all(paymentKeys.map(async (key) => {
        return await redisClient.json.get(key, {path: '$'});
      }));
  
      res.json(payments);
    } catch (error) {
      console.error('Error retrieving payments from Redis:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

function saveUsers(users) {
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
}

// Start the server
app.listen(PORT, () => {
    redisClient.connect()
    console.log(`Server is running on http://localhost:${PORT}`);
});