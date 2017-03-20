// imports
var Url = require('../models/UrlEntity');
var jwt = require('jsonwebtoken');
var config = require('../config');


function addUrl(user, url, done) {}

function getUrls(user) {}

function getUrl(user, url) {}

function delUrl(user, url) {}

// Export des méthodes publiques
module.exports = {
    addUrl: addUrl,
    getUrl: getUrl,
    getUrls: getUrls,
    delUrl: addUrl
};
