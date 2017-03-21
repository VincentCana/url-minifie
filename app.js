const express = require('express');
const app = express();
const urlRoute = require('./app/routes/urlRoute')
const userRoute = require('./app/routes/userRoute')

app.use('/', urlRoute);
app.use('/', userRoute);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});