'use strict';

var knex = require('../db/knex');


function getSaves(req, res, next){
  knex('saves')
  .select()
  .where('email', 'pantsguy@pants.com')
  .then(function (saves){
    res.send(saves)
  }).catch(function (err){
    next(new Error(err));
  })
};

module.exports = getSaves;
