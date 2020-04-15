const db = require('../db');

class User {

  static create(firstName, lastName, email, password, phoneNumber) {
    const queryText = `INSERT INTO users (firstName, lastName, email, password, phoneNumber) 
    VALUES ($1, $2, $3, $4, $5);`;
    return db.query(queryText, [firstName, lastName, email, password, phoneNumber])
      .then(data => 'User has been updated.', data )
  }

  static update(id, firstName, lastName, email, password, phoneNumber) {
    const queryText = `UPDATE users SET first_name = $2, last_name = $3, email = $4, industry = $4, job_position = $5, Contact_info = $6
      WHERE id = $1;`
    return db.query(queryText, [id, firstName, lastName, email, password, phoneNumber])
      .then(data => 'User has been updated.', data);
    }

  static deleteUser(id) {
    const queryText = `DELETE FROM users WHERE id = $1`;
    return db.query(queryText, [id])
      .then(data => 'User Account Deleted', data);
  }

  static getByEmail(email) {
    const queryText = 'SELECT * FROM users WHERE email = $1;';
    return db.query(queryText, [email])
      .then((data) => data.rows[0]);
  }

  static getById(id) {
    const queryText = 'SELECT * FROM users WHERE id = $1;';
    return db.query(queryText, [id])
      .then((data) => data.rows[0]);
  }
}

  module.exports = User;