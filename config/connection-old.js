var mongoose = require('mongoose');

mongoose.Promise = Promise;

var conn = mongoose.createConnection('mongodb://localhost:27017/urlMinifie');

module.exports = conn;
