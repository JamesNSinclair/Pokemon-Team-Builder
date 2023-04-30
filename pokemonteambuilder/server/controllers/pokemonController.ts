// @ts-ignore: <error-code>
const knex = require('../db.ts');
// @ts-ignore: <error-code>
exports.getPokemon = async (req, res) => {
  return res.json(await knex.raw('SELECT * FROM pokemon'));
};
