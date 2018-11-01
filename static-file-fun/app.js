var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(logger('dev'));
app.use(logger('short'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//serves any requested static file(s) that reside in the folder named 'static'
app.use(express.static(path.join(__dirname, 'static')));

/*app.use(function(req, res, next){
  console.log("Request URL: "+req.url);
  console.log("Request Date: "+new Date());
  next();
});

app.use(function(req, res, next){
  var filePath = path.join(__dirname,'static', req.url);
  fs.stat(filePath, function(err, fileInfo){
    if(err){
      next();
      return;
    }
    if(fileInfo.isFile()){
      res.sendFile(filePath);
    }else{
      next();
    }
  });
});*/

//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.statusCode = 404;
  //res.send("File not found!");

  //this function handler puts the application in error mode because of the next line
  next(createError(404));
  //when the app goes into error mode, the error function handlers get executed, i.e. instead of the regular function handlers
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log("Or here?");
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.error(err);
  res.status(err.status || 500);
  //res.render('error');  
  res.send("Oops!, an error occured."+ err.status);
});

module.exports = app;
