let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    email: String,
    password: String,
    urls: [{
        url: String,
        urlMinifie: String
    }]
});

module.exports = userSchema;
