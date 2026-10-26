// Funcion para manejar errores en la aplicacion 
import createError from 'http-errors'
// Importar el framework express
import express from 'express'
// Imprtar modulos para el manejo de rutas
import path from 'node:path'
// Importar modulos para el manejo de cookies 
import cookieParser from 'cookie-parser'
// Importar modulos para el manejo de logs
import logger from 'morgan'
// Importando biblioteca de debug
import createDebug from 'debug' // 👈
// Import para crear Dirname
import { fileURLToPath } from 'node:url'
// importando el template engine Handlebars
import hbs from 'hbs';
import { registerViteHelper } from '#lib/vite.js'
// Importar las rutas de la aplicacion
import indexRouter from '#routes/index.js'
import usersRouter from '#routes/users.js'


// creacion del objeto debug
const debug = createDebug('dwssr1-2026:server') // 👆
// Creando la variable 
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Importando el registro del helper
 

// Crea la aplicacion express
debug('🪄Creando backend')
const app = express();

// Configura el motor de vistas 
app.set('views', path.join(dirname, 'views'));
app.set('view engine', 'hbs');

registerViteHelper(hbs); // Registrando el helper de Vite para Handlebars

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Archivos estaticos para produccion 
if (process.env.NODE_ENV === 'production')  {
  app.use(express.static(path.join(dirname, '..', 'dist')));
}

// configura la carpeta de archivos estaticos
debug('🪄Creando servidor de archivos estaticos')
app.use(express.static(path.join(dirname, '..', 'public')));

// Registrando las rutas de la aplicacion
debug('🛣️Registrando rutas')
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Manejo de error 
app.use((err, req, res, _next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Ejemplo de codigo inalcanzable 
// ((()=>{
//  let age = 10 
//  if (age ==10){
//    console.log("Codigo")
//  }
//  return age 
// })())

// module.exports = app;
export default app;
