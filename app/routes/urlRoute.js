const express = require('express');
const router = express.Router();
const UrlController =  require('../controllers/UrlController');


router.post('/add-url', UrlController.addUrl);
//router.post('/remove-url', UrlController.removeUrl);
//router.post('/get-urls', UrlController.getUrls);

module.exports = router;
