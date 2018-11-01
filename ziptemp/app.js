const DarkSky = require('dark-sky');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ForecastIo = require('forecast.io');
var zipdb = require('zippity-do-dah');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var options = {
  API_Key: process.env.DARKSKY_API_KEY,
  timeout: 1000
}, theWeather = new ForecastIo(options);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res,){
  res.render("index");
});

app.get(/^\/(\d{5})$/, function(req, res, next){
  var zipCode = req.params[0];
  var location = zipdb.zipcode(zipCode);
  if(!location.zipcode){
    next();
    return;
  }
  var latitude = location.latitude;
  var longitude = location.longitude;
  theWeather.get(latitude, longitude, function(err, data){
    if(err){
      console.log("err: "+err.message);
      next();
      return;
    }

    res.json({
      zipcode: zipcode,
      temperature: data.currently.temperature
    });
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err.message);
  res.send('An error occured.'+err.status);
});

module.exports = app;
