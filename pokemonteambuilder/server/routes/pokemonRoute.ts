const express = require('express');
const pokemonController = require('../controllers/pokemonController.ts');
const router = express.Router();

router.get('/pokemon', pokemonController.getPokemon);

module.exports = router;
