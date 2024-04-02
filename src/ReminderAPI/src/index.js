require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notesRoutes')
const userRoutes = require('./routes/userRoutes')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// Socket necessita de um server http
// Adaptando o servidor express para um servidor http
const httpServer = http.createServer(app);
const io = new Server(httpServer);

const users = [];

io.on('connection', (socket) => {
  console.log("[SERVER_SOCKET_IO] New Connection:", socket.id);

  socket.on('test', () => {
    console.log('Evento de teste recebido pelo servidor');
  });

  socket.on('login', (userInfo) => {
    console.log("[SERVER_SOCKET_IO] Login:", userInfo);
    users.push({ ...userInfo, socketId: socket.id });
  }); 

  socket.on("disconnect", () => {
    const user = users.find((user) => user.socketId === socket.id);
    console.log(user, "disconnected");
  });
});

app.use('/users', userRoutes);

app.use('/notes', notesRoutes);

//swagger
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

httpServer.listen(port, () => {
  console.log(`********* Servidor rodando em http://localhost:${port} *********\n********* Docs http://localhost:${port}/api *********`);
})