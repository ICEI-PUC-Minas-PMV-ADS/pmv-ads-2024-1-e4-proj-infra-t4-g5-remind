require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notesRoutes')
const userRoutes = require('./routes/userRoutes')


const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

const uri = process.env.MONGODB_URI 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/users', userRoutes);

app.use('/notes', notesRoutes);
console.log("dsasd")

app.listen(port, () => {
  console.log(`********* Servidor rodando em http://localhost:${port} *********`);
});