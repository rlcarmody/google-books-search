const db = require('../models');

module.exports = {
  findAll(req, res) {
    db.Book
      .find()
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
  create(req, res) {
    db.Book
      .create(req.body)
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
  delete(req, res) {
    db.Book
      .findByIdAndDelete(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  }
}