//Funcion para manehar errores en la aplicacion 
var createError = require('http-errors');
//Importar el framework express
var express = require('express');
//Imprtar modulos para el manejo de rutas
var path = require('path');
//Importar modulos para el manejo de cookies 
var cookieParser = require('cookie-parser');
//Importar modulos para el manejo de logs
var logger = require('morgan');

//Importar las rutas de la aplicacion
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Crea la aplicacion express
var app = express();

//Configura el motor de vistas 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//configura la carpeta de archivos estaticos
app.use(express.static(path.join(__dirname, '..', 'public')));

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
