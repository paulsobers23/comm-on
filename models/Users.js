const db = require('../db');
const bcrypt = require('bcrypt')

class User {
  static addUser(first_name, last_name, email, password, industry, job_position, job_description, thumbs_up, Contact_info) {
    const queryText = `INSERT INTO users (first_name, last_name, email, password, industry, job_position, 
        job_description, thumbs_up, Contact_info) VALUES ($1, $2, $3, $4, $5, $6, $7, $8. $9);`;
  }
  static addConnection(sender_id, reciever_id) {
    const queryText = `INSERT INTO connections (sender_id, reciever_id, connected) VALUES ($1, $2);`;
    return db.query(queryText, [sender_id, reciever_id])
      .then(data => console.log('Connection has been added:', data));
  }

  static getByEmail(email) {
    const queryText = 'SELECT * FROM users WHERE email = $1;';
    return db.query(queryText, [email])
      .then((data) => data.rows[0]);
  }

  static getById(id) {
    const queryText = 'SELECT * FROM users WHERE id = $1;';
    return db.query(queryText, [email])
      .then((data) => data.rows[0]);
  }

  static getConnections(sender_id) {
    const queryText = `SELECT connections.reciever_id from connections WHERE conenctions.sender_id = $1 AND connected = TRUE`;
    return db.query(queryText, [sender_id])
      .then((data) => {
        data.rows.forEach((reciever) => User.getById(sender_id)); // Your connections already stored in user obj.
      });
  }

  static updateUser(id, first_name, last_name, email, industry, job_position, job_description, Contact_info) {
    const queryText = `UPDATE users SET first_name = $2, last_name = $3, email = $4, industry = $4, job_position = $5, Contact_info = $6
      WHERE id = $1`
  }
  static updatePassword() {

  }
}

module.exports = User;