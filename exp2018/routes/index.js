var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send({
    name: 'Chidi',
    address: 'B8 F2 Femi Okunnu 3',
    mobile: '0809 944 4270' });
});

module.exports = router;
