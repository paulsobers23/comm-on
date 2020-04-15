const { Pool } = require('pg');

const pool = new Pool({
  user: 'peter',
  host: '/var/run/postgresql',
  database: 'network',
  port: 8080,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
