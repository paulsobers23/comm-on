const { Pool } = require('pg');

const pool = new Pool({
<<<<<<< HEAD
  user: 'paulsobers23',
  host: '/var/run/postgresql',
  database: 'network',
  port: 5432,
=======
  user: 'peter',
  host: '/var/run/postgresql',
  database: 'network',
  port: 8080,
>>>>>>> origin
});

module.exports = {
  query: (text, params) => pool.query(text, params),
<<<<<<< HEAD
};
=======
};
>>>>>>> origin
