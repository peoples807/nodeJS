var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/action', function(req, res, next) {
  res.json({'ver.':'1.0'});
});

module.exports = router;
