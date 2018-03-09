const db = require("../models");

module.exports ={
  findAll: function(req, res) {
    db.List
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.List
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Received req.body:", req.body);
    db.List
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(id, input, callback) {
    db.List
      .findOneAndUpdate({ _id: id }, input)
      .then(dbModel => callback(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.List
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}