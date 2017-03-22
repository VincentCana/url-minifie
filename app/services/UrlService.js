// imports
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
// var conn = require('../../config/connection');
var UrlEntity = require('../models/UrlEntity');
var urlSchema = require('../schemas/UrlSchema');


function addUrl(url) {
    
    let minify = url.replace('http://www.', '').replace('http://', '')
    //console.log(url);
    minify = 'http://'+ minify.substring(0, 5) + Date.now()
    UrlEntity.insertUrl(url, minify);
    conn.close();
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
    let regExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;  
    return regExp.test(url);
}

// Export des méthodes publiques
module.exports = {
    addUrl: addUrl,
    getUrl: getUrl,
    getUrls: getUrls,
    delUrl: delUrl,
    validateUrl
};

//addUrl('http://stackoverflow.com/questions/8667070/javascript-regular-expression-to-validate-url');     