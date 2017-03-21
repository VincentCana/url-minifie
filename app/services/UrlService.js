// imports
var Url = require('../models/UrlEntity');
var jwt = require('jsonwebtoken');
var urlSchema = require('../schemas/UrlSchema');
var UrlEntity = require('../models/UrlEntity');
var conn = require('../../config/connection');
var mongoose = require('mongoose');


// mongoose.Promise = Promise;
//assert.equal(query.exec().constructor, global.Promise);

function addUrl() {}

function getUrls() {}

function getUrl(url) {
    //conn.open();
    UrlEntity.findOne({
        'url': url
    }, 'url urlMinifie').then((doc) => {
        console.log(doc);
    });
}

function delUrl() {}

// Export des méthodes publiques
module.exports = {
    addUrl: addUrl,
    getUrl: getUrl,
    getUrls: getUrls,
    delUrl: delUrl
};

getUrl('google.fr');
