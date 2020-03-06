var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { /* here the route already includes /users as per the call in the app.js; so this is the browser bar would be localhost:3000/users */
  res.send('respond with a resource');
});

/* GET path for cool users */
router.get('/cool', function(req, res, next) { /* here the route already includes /users as per the call in the app.js; so this is the browser bar would be localhost:3000/users/cool */
  res.send(`You're so cool`);
});

module.exports = router;
