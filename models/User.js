const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleID: String
});

mongoose.model('User', userSchema);
