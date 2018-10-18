var express = require('express');
var url = require('url');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  var parsedURL = url.parse('http://localhost:3000/users?name=AG');
  console.log("protocol: "+parsedURL.protocol);
  console.log("host: "+parsedURL.host);
  console.log("query: "+parsedURL.query);
});

module.exports = router;