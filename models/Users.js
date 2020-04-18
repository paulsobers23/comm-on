const db = require('../db');

class User {
  static create(firstName, lastName, email, password) {
    const queryText = `INSERT INTO users (first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4);`;
    return db.query(queryText, [
      firstName,
      lastName,
      email,
      password,
    ]);
  }

  static update(id, firstName, lastName, email, password) {
    const queryText = `UPDATE users SET first_name = $2, last_name = $3, email = $4, password = $4
      WHERE id = $1;`;
    return db.query(queryText, [
      id,
      firstName,
      lastName,
      email,
      password,
    ]);
  }

  static deleteUser(id) {
    const queryText = 'DELETE FROM users WHERE id = $1';
    return db.query(queryText, [id]);
  }

  static getByEmail(email) {
    const queryText = 'SELECT * FROM users WHERE email = $1;';
    return db.query(queryText, [email]).then((data) => data.rows[0]);
  }
}

module.exports = User;
