const knex = require('knex')({
  client: 'postgresql',
  connection: {
    host: 'localhost',
    database: 'pokemon_db',
  },
});
// @ts-ignore: <error-code>
exports.getPokemon = async (req, res) => {
  return res.json(await knex.raw('SELECT * FROM pokemon'));
};
