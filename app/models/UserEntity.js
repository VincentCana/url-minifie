let mongoose = require('mongoose');
let userSchema = require('../schemas/UserSchema');
let User = mongoose.model('User', userSchema);


module.exports = User;
