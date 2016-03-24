var express = require('express');
var router = express.Router();


var login = require('./login');
var signup = require('./signup');
// var airbnb = require('./airbnb');
// var addSave = require('./addSave');
var getSaves = require('./getSaves');

// Log IN
router.post('/login', login);
// Sign UP
router.post('/signup', signup);
// AIRBNB
// router.get('/airbnb', airbnb);
// Save a City
// router.post('/addSave', addSave);
// Retrieve Saved cities
router.get('/getSaves', getSaves);


module.exports = router;
