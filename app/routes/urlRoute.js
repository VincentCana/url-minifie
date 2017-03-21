const express = require('express');
const router = express.Router();
const UrlController =  require('../controllers/UrlController');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

router.post('/urls', jsonParser , UrlController.addUrl);
router.delete('/urls/:id', UrlController.removeUrl);
router.get('/urls', UrlController.getUrls);

module.exports = router;
