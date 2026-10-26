#!/usr/bin/env node

/**
 * Module dependencies.
 */
import http from "node:http";
import createDebug from "debug";
import app from "../app.js";

// Importando Debug y creación del objeto debug
const debug = createDebug("dwssr1-2026:server");

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
  // Evitamos 'no-shadow' cambiando el nombre de la variable interna a 'parsedPort'
  const parsedPort = parseInt(val, 10);

  // Usamos Number.isNaN en lugar de isNaN (no-restricted-globals)
  if (Number.isNaN(parsedPort)) {
    // named pipe
    return val;
  }

  if (parsedPort >= 0) {
    // port number
    return parsedPort;
  }

  return false;
};

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      // eslint-disable-next-line no-console
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      // eslint-disable-next-line no-console
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `Pipe ${addr}` : `Port ${addr.port}`;
  debug(`💻Listening on ${bind}`);
};

/**
 * Listen on provided port, on all network interfaces.
 */
// Ahora que las funciones están definidas arriba, podemos llamarlas sin el error 'no-use-before-define'
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
