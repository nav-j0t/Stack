const products = require('./data/products.js');
const express = require('express');

const app = express();

app.listen(5000, console.log('server running on port 5000'));

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.get('/api/product/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send();
});
