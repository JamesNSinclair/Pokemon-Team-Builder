const {Pool} = require('pg');

// create a new pool to handle database connections
const pool = new Pool({
  name: 'pokemon_db@localhost',
  host: 'localhost',
  database: 'pokemon_db',
  port: 5432, // default port for PostgreSQL
});

// create the users table
pool.query(
  `
  CREATE TABLE IF NOT EXISTS type_weakness (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    weak_to VARCHAR(255) NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS pokemon_types (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS pokemon (
    id SERIAL PRIMARY KEY,
    dex_number INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    type_1 VARCHAR(255) NOT NULL,
    type_2 VARCHAR(255)
  );
  
  CREATE TABLE IF NOT EXISTS type_resistance (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    resistant_to VARCHAR(255) NOT NULL
  );
  
`,

  (err, res) => {
    if (err) {
      console.error(err);
      pool.end();
      return;
    }
    console.log('Table users created successfully');
    pool.end();
  },
);
