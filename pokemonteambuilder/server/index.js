const express = require('express');
const pokemonRoutes = require('./routes/pokemonRoute.ts');
const router = express.Router();
const app = express();
app.use('/', pokemonRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
