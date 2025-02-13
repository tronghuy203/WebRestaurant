var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');
var cartRouter = require('./routes/cart');
var registerRouter = require('./routes/register');
var trangchuRouter = require('./routes/trangchu');
var ttcnRouter = require('./routes/ttcn');
var nhanxetRouter = require('./routes/nhanxet');
var blogRouter = require('./routes/blog');
var baotriRouter = require('./routes/baotri');
var chefRouter = require('./routes/chef');

var db = require('./config/connect_db');
const { Server } = require('http');
var app = express();
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}))
db.connect();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/trangchu', trangchuRouter);
app.use('/cart', cartRouter);
app.use('/ttcn', ttcnRouter);
app.use('/nhanxet', nhanxetRouter);
app.use('/blog', blogRouter);
app.use('/baotri', baotriRouter);
app.use('/chef', chefRouter);


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
