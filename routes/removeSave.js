'use strict';
var knex = require('../db/knex.js');

function removeSave(req, res, next){
  var existingSave = {
    email: req.body.email,
    city: req.body.city,
    country: req.body.country
  }
  knex('saves')
  .delete()
  .where('email', req.body.email)
  .where('city', req.body.city)
  .where('country', req.body.country)
}

module.exports = removeSave;
