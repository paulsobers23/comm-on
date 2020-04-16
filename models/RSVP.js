const db = require('../db');

class RSVP {
  static create(eventId, userId) {
    const queryText = `INSERT INTO rsvp (event_id, user_id)
    VALUES ($1, $2);`;
    return db.query(queryText, [eventId, userId]);
  }

  static delete(userId) {
    const queryText = 'DELETE FROM rsvp WHERE user_id = $1;';
    return db.query(queryText, [userId]);
  }

  static update(eventId, userId) {
    const queryText = 'UPDATE rsvp SET event_id = $1, user_id = $2;';
    return db.query(queryText, [eventId, userId]);
  }


}

module.exports = RSVP;
