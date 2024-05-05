'use strict';
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), './src/.env') }); // Carrega as variáveis de ambiente do arquivo .env

const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGODB_URI, {});

// Check connection
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "DB connection error:"));
connection.once("open", () => {
    console.log("=====>>>> App is connected to the DB.");
});

module.exports = db;
