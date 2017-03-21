let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    email: { type: String, index: true},
    password: String,
    urls: [{
        url: String,
        urlMinifie: String
    }]
});

module.exports = userSchema;
