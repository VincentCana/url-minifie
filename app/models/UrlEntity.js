var mongoose = require('mongoose');
var urlSchema = require('../schemas/urlSchema');
var Url = mongoose.model('Url', urlSchema);


var insertUrl = function(url, urlMinifie) {
    var link = new Url({
        url,
        urlMinifie
    });
};
