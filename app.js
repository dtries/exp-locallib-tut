var createError = require('http-errors'); /* creates http errors info when they occur */
var express = require('express'); /* 3rd party node server framework */
var path = require('path'); /* core node library for parsing file and directory paths */
var cookieParser = require('cookie-parser'); /* 3rd party npm that parses cookie header and results can be obtained using req.cookies */

var logger = require('morgan'); /* 3rd party npm that displays http requests to the terminal  */

var indexRouter = require('./routes/index'); /* route module for homepage; in routes folder*/
var usersRouter = require('./routes/users');/* route module for users, in routes folder */

var app = express(); /* creates object that uses express npm */

// view engine setup
app.set('views', path.join(__dirname, 'views')); /* set location of views folder that contains the html framework template */

app.set('view engine', 'pug'); /* set view engine, html framework to be pug */

app.use(logger('dev')); /* adds morgan middleware to request chain */
app.use(express.json()); /* express core middleware that parses incoming JSON when present */
app.use(express.urlencoded({ extended: false })); /* express core middleware that parse urlencoded body information, with extended set to false it used the querystring library, true would use the qs library */

app.use(cookieParser()); /* allows for parsing of cookie header and creates object with keys determined by the cookie name */

app.use(express.static(path.join(__dirname, 'public'))); /* path to static (i.e., non-changing) resouces such as javascript, css, images, etc. that are called but not able to be altered) */

// Now that middleware is set up, add use of previously imported route-handling code (see above). Use the below code to define routes to different parts of the site.

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;
