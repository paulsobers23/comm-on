const { Pool } = require('pg');

const pool = new Pool({
  user: 'paulsobers23',
  host: '/var/run/postgresql',
  database: 'network',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};