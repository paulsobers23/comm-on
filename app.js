const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const port = 8080;

const host = '127.0.0.1';

const router = require('./routes/route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);


app.listen(port, host, () => console.log(`Server listnening on port ${port}...`));
