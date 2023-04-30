const express = require('express');
const bodyParser = require('body-parser');
const pokemonRoutes = require('./routes/pokemonRoute.ts');

const app = express();

app.use(bodyParser.json());

app.use('/', pokemonRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
