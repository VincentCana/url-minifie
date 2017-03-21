var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    password: String,
    urls: [{
        url: String,
        urlMinifie: String
    }]
});

module.exports = userSchema;
