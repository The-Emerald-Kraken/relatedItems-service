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
  //get id from url 
  //create 9 sequential numbers after the id number
  // use find on the 10 items and add them to an array
  //respond with the array of 10

  //experimental
  //use Items.find({}).limit(10)
  //res.send(the 10 items as an array)

  Items.find({}).limit(10)
    .then(data => {
      console.log(data);
      res.send(data);
    })
  res.send('GET REQUEST RESPONSE')
  
})

app.listen(port, () => {
  console.log(`Example app listening at: ${port}`)
})