var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  var residentName = req.query['name'];
  
  if(residentName == null){
    res.render('users', { 
      title: 'Users', 
      message: 'Please provide a resident\'s name.', 
      prompt: 'Message'});
  }else if (residentName == 'Chidi'){
    res.render('users', { 
      title: 'Users', 
      message: 'B8 F2 Femi Okunnu 3,0809 944 4270', 
      prompt: 'Chidi'});
  }else{
    res.render('users', { 
      title: 'Users', 
      message: 'Resident not found.', 
      prompt: 'Message'});
  }
});  

module.exports = router;
