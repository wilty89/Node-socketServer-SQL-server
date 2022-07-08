//Servidor de Express
const express = require('express');
const app = express();
app.use(express.static("public"));
//Servidor de socket
const http = require('http');
const { emit } = require('process');
const server = http.createServer(app);

//Otros
//const path= require('path');
const log = console.log.bind(console);
const port = process.env.PORT||8080

//Importaciones
const { obtenerPeliculas, getCities } = require("./controllers/aes.controllers");

//Configuracion Socket Server
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
 
io.on("connection", function (socket) {

  log("Nuevo cliente conectado");

  obtenerPeliculas().then((response) => socket.emit("mensaje", response[0]));

  const emitDB= async () => {
    const response = await getCities()
    socket.emit("wilber", response[0])
  }
  emitDB()
 // getCities().then((response) => socket.emit("wilber", response[0]))

  socket.on("disconnect", function () {
    log("usuario desconectado");
  });
});

server.listen(port, function () {
    log(`Servidor iniciando en http://localhost:${port}`);
});
