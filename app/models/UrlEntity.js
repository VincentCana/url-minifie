var mongoose = require('mongoose');
var urlSchema = require('../schemas/UrlSchema');
var Url = mongoose.model('Url', urlSchema);


var insertUrl = function(url, urlMinifie) {
    var link = new Url({
        url,
        urlMinifie
    });
    link.save(function(err) {
      if (err) return handleError(err);
    });
};

var getUrls = function() {
    return Url.find().exec();
};

module.exports = {Url, insertUrl, getUrls};
