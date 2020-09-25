const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3004;

const Items = require('../database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));


app.get('/api/products/:id/relatedItems', (req, res) => {
    //request 10 random items from the database
  res.send('GET REQUEST RESPONSE')
})

app.listen(port, () => {
  console.log(`Example app listening at: ${port}`)
})