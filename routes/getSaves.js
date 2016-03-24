'use strict';

var knex = require('../db/knex');


function getSaves(req, res, next){
  knex('saves')
  .select()
  .where('user_id', '3')
  .then(function (saves){
    res.send(saves)
  }).catch(function (err){
    next(new Error(err));
  })
};

module.exports = getSaves;
