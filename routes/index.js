var express = require('express');
var router = express.Router();
// var message = require('../model/message');

/**
 * Routes to home page
 */
router.get('/', function(req, res, next) {
  res.render('index');
});

/**
 * Routes to experience page
 */
router.get('/experience', function(req, res, next) {
  res.render('experience');
});

/**
 * Routes to projects page
 */
router.get('/projects', function(req, res, next) {
  res.render('projects');
});

/**
 * Routes to connect page
 */
router.get('/connect', function(req, res, next) {
  res.render('connect', {message: ""});
});

/**
 * Stores message in MongoDB database
 */
router.post('/sendMessage', async (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let msg = req.body.message;

  // const msgg = new message({
  //   name: name,
  //   email: email,
  //   message: msg
  // });
  //msgg.save();
  res.render('connect', {message: "Message sent successfully!"});
});

module.exports = router;
