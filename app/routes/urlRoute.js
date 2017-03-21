const express = require('express');
const router = express.Router();
const UrlController =  require('../controllers/UrlController');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

router.post('/add-url', jsonParser , UrlController.addUrl);
router.post('/remove-url', UrlController.removeUrl);
router.post('/get-urls', UrlController.getUrls);

module.exports = router;
