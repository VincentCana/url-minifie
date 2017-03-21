var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
    url: String,
    urlMinifie: String
});
