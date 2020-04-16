const Events = require('../models/Events');
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
  console.log(creator);
  Events.create(creator, dateCreated, title, description, purpose, location, dateTime, type)
    .then((data) => res.status(201).json(data.rows))
    .then(() => Events.getByCreator(creator))
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
    .then(() => res.status(200).send('Successfully Updated Event'))
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

const getRSVPs = (req, res) => {
  const { id } = req.params;
  Events.getRSVPS(id)
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
};
