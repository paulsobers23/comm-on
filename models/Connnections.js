const db = require('../db');
const bcrypt = require('bcrypt')

class Connections {

  static addConnection(sender_id, reciever_id) {
    const queryText = `INSERT INTO connections (sender_id, reciever_id) VALUES ($1, $2);`;
        return db.query(queryText, [sender_id, reciever_id])
  }

  static acceptConnection(id, first_name, last_name, email, industry, job_position, job_description, Contact_info) {
    const queryText = `UPDATE users SET first_name = $2, last_name = $3, email = $4, industry = $4, job_position = $5, Contact_info = $6
      WHERE id = $1`
  }
 
  static declineConnection(id) {
    const queryText = `DELETE FROM connections WHERE id = $1 AND connected = TRUE`;
    
  }
  
  static deleteConnection(id) {
    const queryText = `DELETE FROM connections WHERE id = $1 AND connected = TRUE`;
    return db.query(queryText, [id])
      .then(data => console.log('User Account Deleted', data))
  }

  static getConnections(sender_id) {
    const queryText = `SELECT connections.reciever_id from connections WHERE conenctions.sender_id = $1 AND connected = TRUE`;
    return db.query(queryText, [sender_id])
      .then((data) => {
        data.rows.forEach(id => User.getById(id));
      });
  };


module.exports = Connections;