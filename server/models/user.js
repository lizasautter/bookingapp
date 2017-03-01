var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    first: String, 
    last: String,
    password: String, 
    email: String,
    phone: String,
    admin: Boolean
})

module.exports = mongoose.model('User', userSchema);
