#!bin/bash

#! create JWT TOKEN

touch generateSecret.js

#! edit file and insert codes

const crypto = require('crypto');

const jwtSecret = crypto.randomBytes(64).toString('hex');
console.log(jwtSecret);

#! execute file in terminal

node generateSecret.js

#! copy the shown token and insert in .env file

#! to create a valid pair os values for bcrypt

touch hashPassword.js

#! edit file and insert codes

const bcrypt = require('bcrypt');

const password = 'masterpassword';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }
  console.log('Hashed password:', hash);
});

#! execute file in terminal

node hashPassword.js


