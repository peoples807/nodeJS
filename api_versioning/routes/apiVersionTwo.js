var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/action', function(req, res, next) {
  res.json({'ver.':'2'});
});

module.exports = router;
