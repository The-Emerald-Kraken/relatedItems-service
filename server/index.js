/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3004;

const Item = require('../database/Item.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../public`));

app.get('/api/products/:id/relatedItems', (req, res) => {
  // request 10 items from the database
  Item.find({}).limit(10)
    .then((data) => {
      res.send(data);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.send(500);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at: ${port}`);
});
