// imports
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var conn = require('../../config/connection');
var UrlEntity = require('../models/UrlEntity');
var urlSchema = require('../schemas/UrlSchema');


function addUrl(url) {
    UrlEntity.insertUrl(url, 'http://'+ url.substring(7, 5) + Date.now());
    return url;
}

function getUrls() {}

function getUrl(url) {
    console.log(url);
    UrlEntity.find()
        .then((doc) => {
            console.log(doc);
        }).catch((err) => {
            console.log(err);
        });
}

function delUrl() {}

function validateUrl(url){
    return true;
}

// Export des méthodes publiques
module.exports = {
    addUrl: addUrl,
    getUrl: getUrl,
    getUrls: getUrls,
    delUrl: delUrl
};

getUrl('google.fr');
