var express = require('express');
var registration = require('../models/registration');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  registration.find({}, function(err, users) {
    var registrationsMap = {};

  for (let i=0;i<3;i++) {
    registrationsMap = registration[i];
    res.send(registrationsMap);
  }
  });

  res.send('respond with a resource');
});

module.exports = router;
