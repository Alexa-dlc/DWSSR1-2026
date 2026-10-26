// Importando configurador de Vite
import { defineConfig } from "vite";
import path from "node:path";
// Importando tailwindcss
import tailwindcss from "@tailwindcss/vite";

// Import para crear Dirname
import { fileURLToPath } from "node:url";

const filename = fileURLToPath(import.meta.url);
const directoryName = path.dirname(filename);

const handlebarsReload = {
  name: "handlebars-reload",
  configureServer(server) {
    const viewsDirectory = path.resolve(directoryName, "server/views");
    server.watcher.add(viewsDirectory);
    server.watcher.on("change", (file) => {
      if (file.endsWith(".hbs")) {
        server.ws.send({ type: "full-reload" });
      }
    });
  },
};

export default defineConfig({
  // Director de Raiz de los archivos fuente del front-end
  root: "src",
  // Agregadno a vite el plugin de tailwindcss
  plugins: [tailwindcss(), handlebarsReload],
  // Configurar un servidor de desarrollo
  server: {
    // Puerto de escucha
    port: 5173,
    // Rigidez del puerto
    strictPort: true,
  },
  // Configurando el Build
  build: {
    // Directorio de salida del js para produccion
    outDir: "../dist",
    // Asegurando limpieza del folder de produccion
    emptyOutDir: true,
    // Generar manifiesto para el servidor
    manifest: true,
    // Opciones de empaquetado
    rollupOptions: {
      input: {
        main: path.resolve(directoryName, "src/main.js"),
      },
    },
  },
  // Configuracion para el desarrollo
  publicDir: false,
});
