// @ts-ignore: <error-code>
const knex = require('knex')({
  client: 'postgresql',
  connection: {
    host: 'localhost',
    database: 'pokemon_db',
  },
});

module.exports = knex;
