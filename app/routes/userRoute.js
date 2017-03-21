const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/users', UserController.register);
router.post('/users/connect', UserController.connect);

module.exports = router;
