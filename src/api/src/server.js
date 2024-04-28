const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), './src/.env') }); // Carrega as variáveis de ambiente do arquivo .env
const app = require('./app');
const http = require('http');
const { Server } = require('socket.io');

const port = process.env.PORT;

// Socket necessita de um server http
// Adaptando o servidor express para um servidor http
const httpServer = http.createServer(app);
const io = new Server(httpServer);

const users = [];

io.on('connection', (socket) => {
  console.log('[SERVER_SOCKET_IO] New Connection:', socket.id);

  socket.on('test', () => {
    console.log('Evento de teste recebido pelo servidor');
  });

  socket.on('login', (userInfo) => {
    console.log('[SERVER_SOCKET_IO] Login:', userInfo);
    users.push({ ...userInfo, socketId: socket.id });
  });

  socket.on('disconnect', () => {
    const user = users.find((user) => user.socketId === socket.id);
    console.log(user, 'disconnected');
  });
});

httpServer.listen(port, () => {
  console.log(
    `********* Servidor rodando em http://localhost:${port} *********\n********* Docs http://localhost:${port}/api *********`,
  );
});
