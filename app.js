const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const port = 8080;

const host = '127.0.0.1';

const router = require('./routes/route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

<<<<<<< HEAD

app.listen(port, host, () => console.log(`Server listnening on port ${port}...`));
=======
app.listen(port, () => console.log(`Server listnening on port ${port}...`));
>>>>>>> origin
