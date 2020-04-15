const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views', 'login.html'));
  });

app.listen(port, () => console.log(`Server listnening on port ${port}...`));