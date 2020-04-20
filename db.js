const { Pool } = require('pg');

const pool = new Pool({
  // connectionString: process.env.DATABASE_URL,
  user: 'Peter',
  host: '/tmp',
  database: 'network',
  port: 5432,
});

module.exports = {
  query(text, params) {
    return pool.query(text, params);
  },
};