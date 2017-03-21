var mongoose = require('mongoose');

var conn = mongoose.createConnection('mongodb://localhost:27017/urlMinifie');

mongoose.Promise = Promise;

module.exports = conn;
