const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/users', (req, res)=>{
    UserController.register(req, res);
});
router.post('/users/connect', (req, res)=>{
    UserController.connect(req, res);
});

module.exports = router;
