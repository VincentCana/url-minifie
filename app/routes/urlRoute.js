const express = require('express');
const app = express();
const UrlController = require('../controllers/UrlController');

app.get('/add-url', UrlController.addUrl);
app.get('/remove-url', UrlController.removeUrl);
app.get('/get-urls', UrlController.getUrls);
