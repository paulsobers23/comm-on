const Events = require('../models/Events');
const RSVPs = require('../models/RSVP');

// need to send back the event just created, currently sending back an empty array but create the event in the database.
const create = (req, res) => {
  const {
    creator,
    dateCreated,
    title,
    description,
    purpose,
    location,
    dateTime,
    type,
  } = req.body;
  Events.create(creator,dateCreated, title, description, purpose, location, dateTime, type)
    .then((data) => {
      console.log(data.rows);
      return res.status(201).json(data.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const getAll = (req, res) => {
  Events.getAll()
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const update = (req, res) => {
  const { id } = req.params;
  const {
    title, description, purpose, location, dateTime, type,
  } = req.body;
  Events.update(id, title, description, purpose, location, dateTime, type)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const remove = (req, res) => {
  const { id } = req.params;
  Events.delete(id)
    .then(() => res.status(200).send('200 Successfully Deleted Task'))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

// first this function need to find the userToken, then find the event id and only then will they be able to attend an event
const createRSVPs = (req, res) => {
  const { id: entryId } = req.params;
  RSVPs.create(entryId, userId)
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const getRSVPs = (req, res) => {
  const { eventId } = req.params;
  Events.getRSVPs(eventId)
    .then((data) => res.status(200).json(data.rows[0]))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports = {
  create,
  getAll,
  update,
  remove,
  getRSVPs,
  createRSVPs,
};
