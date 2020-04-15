const bcrypt = require('bcrypt');
const db = require('../db');

class User {
  static create(firstName, lastName, email, password, industry, jobPosition, jobDescription, thumbsUp, contactInfo) {
    const queryText = `INSERT INTO users (first_name, last_name, email, password, industry, job_position,
        job_description, thumbs_up, contact_info) VALUES ($1, $2, $3, $4, $5, $6, $7, $8. $9);`;
    return db.query(queryText, [firstName, lastName, email, password, industry, jobPosition, jobDescription, thumbsUp, contactInfo]);
  }

  static addConnection(senderId, recieverId) {
    const queryText = 'INSERT INTO connections (sender_id, reciever_id, connected) VALUES ($1, $2);';
    return db.query(queryText, [senderId, recieverId])
      .then((data) => console.log('Connection has been added:', data));
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

  static getConnections(senderId) {
    const queryText = 'SELECT connections.reciever_id from connections WHERE conenctions.sender_id = $1 AND connected = TRUE';
    return db.query(queryText, [senderId])
      .then((data) => {
        data.rows.forEach((reciever) => User.getById(senderId)); // Your connections already stored in user obj.
      });
  }

  static updateUser(id, firstName, lastName, email, industry, jobPosition, jobDescription, contactInfo) {
    const queryText = `UPDATE users SET first_name = $2, last_name = $3, email = $4, industry = $4, job_position = $5, contact_info = $6
      WHERE id = $1`;
  }

  static updatePassword() {
    // This is immediately needed, Complete if needed, otherwise delete.
  }
}

module.exports = User;
