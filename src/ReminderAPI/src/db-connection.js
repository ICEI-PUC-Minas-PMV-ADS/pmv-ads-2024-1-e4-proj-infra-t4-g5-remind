'use strict';
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGODB_URI, {});

// Check connection
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "DB connection error:"));
connection.once("open", () => {
    console.log("=====>>>> App is connected to the DB.");
});

module.exports = db;