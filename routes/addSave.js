'use strict';
var knex = require('../db/knex.js');

function addSave(req, res, next){
  var newSave = {
    email: req.body.email,
    city: req.body.city,
    country: req.body.country
  }
  knex('saves')
  .insert(newSave)
}

module.exports = addSave;
