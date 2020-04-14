const db = require('../db');

class User {
    static addUser(first_name, last_name, email, password, industry, job_position, job_description, thumbs_up, contact_info) {
      const queryText = `INSERT INTO users (first_name, last_name, email, password, industry, job_position,
        job_description, thumbs_up, contact_info) VALUES ($1, $2, $3, $4, $5, $6, $7, $8. $9)`;
    }
    static addConnection() {

    }
    static getByEmail(email) {
      const queryText = 'SELECT * FROM users WHERE email = $1;';
      return db.query(queryText, [email])
          .then((data) => data.rows[0]);
  }
    static getConnections(sender_id) {
        const queryText = `SELECT connections.reciever_id from connections WHERE conenctions.sender_id = $1 AND connected = TRUE`;
        return db.query(queryText, [sender_id])
            .then((data) => {
              data.rows.forEach((reciever) => {
                getById(reciever)
              });
            });
    }

    static updateUser(id, first_name, last_name, email, industry, job_position, job_description, contact_info) {
      const queryText = `UPDATE users SET first_name = $2, last_name = $3, email = $4, industry = $4, job_position = $5, contact_info = $6
      WHERE id = $1`
    }
    static updatePassword() {

    }
}

module.exports = User;