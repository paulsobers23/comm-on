const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const port = 8080;

const router = require('./routes/route');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(router);

app.listen(port, () => console.log(`Server listnening on port ${port}...`));