// imports
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
// var conn = require('../../config/connection');
var UrlEntity = require('../models/UrlEntity');
var urlSchema = require('../schemas/UrlSchema');


function addUrl() {}

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

// Export des méthodes publiques
module.exports = {
    addUrl: addUrl,
    getUrl: getUrl,
    getUrls: getUrls,
    delUrl: delUrl
};

getUrl('google.fr');
