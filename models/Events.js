const db = require('../db');
const User = require('../models/Users.js');

class Events {
  static create(creator, dateCreated, title, description, purpose, location, dateTime, type) {
    const queryText = `INSERT INTO events (creator, dateCreated, title, description, purpose, location, dateTime, type)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    return db.query(queryText, [creator, date_created, title, description, purpose, location, dateTime, type])
  }

  static delete(id) {
    const queryText = `DELETE FROM events WHERE ID = $1`;
    return db.query(queryText, [id]);
  }

  static update(id, title, description, purpose, location, dateTime, type) {
    const queryText = `UPDATE events SET title = $2, description = $3, purpose = $4, location = $5, date_time = $6, type = $7 WHERE id = $1`;
    return db.query(queryText, [id, title, description, purpose, location, dateTime, type])
      .then(data => 'Event updated:', data)
  }

  static getById(eventId) {
    const queryText = `SELECT * FROM events WHERE id = $1`;
    return db.query(queryText, [eventId])
  }
  
  static getByCreator(creatorId) {
    const queryText = `SELECT * FROM events WHERE id = $1`;
    return db.query(queryText, [creatorId])
  }

  static getLastByCreator( creatorId) {
    const queryText = `SELECT * FROM events WHERE id = $1`;
    return db.queryText(queryText, [creatorId])
      .then(data => data.rows[0]);
  }

  static getRSVPs(eventId) {
    const queryText = `SELECT * FROM users ON JOIN user.id = event_id;`
    return db.query(queryText, [eventId])
      .then(data => data.rows);
  }

  static getByTitle(title) {
    const queryText = `SELECT * FROM events WHERE title = $1`;
    return db.query(queryText, [eventId])
      .then(data => data.rows[0]);
  }
};


const peter = new User('peter', 'rose', 'peterrosejr@gmail.com', 'nicePassword', '347-555-6107');
console.log(peter.create('Peter', '11-02-2020','sample event', 'to test', 'New York', '09-12-2021', 'virtual'));

module.exports = Events;