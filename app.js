const express = require('express');
const mongoose = require('mongoose');
const app = express();
const urlRoute = require('./app/routes/urlRoute');
const userRoute = require('./app/routes/userRoute');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', urlRoute);
app.use('/', userRoute);

mongoose.connect('mongodb://localhost:27017/urlMinifie', (err) => {
    console.log(err);

    app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });
});
