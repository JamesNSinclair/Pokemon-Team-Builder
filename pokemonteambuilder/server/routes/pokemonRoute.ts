const express = require('express');
const pokemonController = require('../controllers/pokemonController.ts');
const typeEffectiveNessController = require('../controllers/typeEffectivenessController.ts');
const router = express.Router();

router.get('/pokemon', pokemonController.getPokemon);
router.post(
  '/type-effectiveness',
  typeEffectiveNessController.postTypeEffectiveness,
);

module.exports = router;
