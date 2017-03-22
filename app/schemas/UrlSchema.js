let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let urlSchema = new Schema({
    url: String,
    urlMinifie: String
});


module.exports = urlSchema;
