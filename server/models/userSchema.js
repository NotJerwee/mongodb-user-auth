// Import to use MongoDB
const mongoose = require('mongoose');

// User registration/post creates a new schema with new values
const userSchema = new mongoose.Schema({ 
    email: { type: String, required: true},
    username: { type: String, required: true},
    password: { type: String, required: true}
}) 

const User = mongoose.model('User', userSchema);

module.exports = User;
