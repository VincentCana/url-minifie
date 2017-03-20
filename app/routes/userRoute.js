const express = require('express')
const app = express()
const UserController = require('../controllers/UserController')

app.post('/register', UserController.register());

app.post('/connect', UserController.connect());