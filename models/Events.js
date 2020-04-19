const db = require('../db');

class Events {
  static create(
    creator,
    dateCreated,
    title,
    description,
    purpose,
    location,
    dateTime,
    type,
  ) {
    const queryText = `INSERT INTO events (creator,date_created, title, description, purpose, location, date_time, type)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *; `;
    return db.query(queryText, [
      creator,
      dateCreated,
      title,
      description,
      purpose,
      location,
      dateTime,
      type,
    ]);
  }

  static delete(id) {
    const queryText = 'DELETE FROM events WHERE id = $1;';
    return db.query(queryText, [id]);
  }

  static update(id, title, description, purpose, location, dateTime, type) {
    const queryText = 'UPDATE events SET title = $2, description = $3, purpose = $4, location = $5, date_time = $6, type = $7 WHERE id = $1 RETURNING *; ';
    return db.query(queryText, [
      id,
      title,
      description,
      purpose,
      location,
      dateTime,
      type,
    ]);
  }

  static getById(eventId) {
    const queryText = 'SELECT * FROM events WHERE id = $1;';
    return db.query(queryText, [eventId]);
  }

  static getByCreator(creatorId) {
    const queryText = 'SELECT * FROM events WHERE creator = $1;';
    return db.query(queryText, [creatorId]);
  }

  static getAll() {
    const queryText = 'SELECT * FROM events;';
    return db.query(queryText);
  }

  static getLastByCreator(creatorId) {
    const queryText = 'SELECT * FROM events ORDER BY id DESC LIMIT 1;';
    return db.queryText(queryText, [creatorId]).then((data) => data.rows[0]);
  }

  static getRSVPs(eventId) {
    const queryText = 'SELECT * FROM users FULL JOIN rsvp ON users.id = rsvp.user_id WHERE rsvp.event_id = $1; ';
    return db.query(queryText, [eventId]);
  }
}

module.exports = Events;
