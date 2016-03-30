var express = require('express');
var router = express.Router();


var login = require('./login');
var signup = require('./signup');
// var airbnb = require('./airbnb');
var addSave = require('./addSave');
var removeSave = require('./removeSave');
var getSaves = require('./getSaves');

// Log IN
router.post('/login', login);
// Sign UP
router.post('/signup', signup);
// AIRBNB
// router.get('/airbnb', airbnb);
// Save a City
router.post('/addSave', addSave);
// Remove a City
router.post('/removeSave', removeSave);
// Retrieve Saved cities
router.get('/getSaves', getSaves);


module.exports = router;
