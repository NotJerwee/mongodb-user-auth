// Import dependencies
const express = require('express'); // Sets up side server
const mongoose = require('mongoose'); // Connect to mongoDB/database
const cors = require('cors'); // Minimize error when connected to database & api
const bodyParser = require('body-parser'); // Parse data into JSON
const bcrypt = require('bcrypt'); // User auth - hash and store password
const jwt = require('jsonwebtoken'); // Token that follows user when signed in & removed when signed out
const User = require('./models/userSchema'); 

const SECRET_KEY = 'secretkey'

// Connect to Express app
const app = express();

// Connect to MongoDB
const MongoDBURI = 'mongodb+srv://JerryLin:JerryLin123@cluster0.stnbrne.mongodb.net/UsersDB?retryWrites=true&w=majority';
mongoose.connect(MongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(3001, () => { // Port 3001, React default port is 3000
        console.log('Server is connected to port 3001 and connected to MongoDB');
    }); 
})
.catch((error) => {
    console.log('Unable to connect to Server and/or MongoDB');
})

// Middleware
app.use(bodyParser.json());
app.use(cors());


// Routes
// USER Registration
// POSt Register
// Request data -> respond data in JSON format
app.post('/register', async (req, res) => {
    try {
        const { email, username, password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10) // 10 - how hard it is to unhash the password
        const newUser = new User({ email, username, password: hashedPassword }) // Create new user from userSchema
        await newUser.save()
        res.status(201).json({ message: 'User created sucessfully'}) // Send status code of 201 if it works and send a message 
    } catch (error) {
        res.status(500).json({ message: 'Error signing up'})
    }
})

// GET REGISTERED USERS
app.get('/register', async (req, res) => {
    try {
        const users = await User.find()
        res.status(201).json(users)
    } catch (error) {
        res.status(500).json({ error: 'Unable to get users' })
    }
})

// GET LOGIN
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username }) // Find username
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password) // Compare password saved to password entered by user
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, {expiresIn: '1hr' })
        res.json({ message: 'Login successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Error logging in'})
    }
})
