'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha:{
    type: String,
    required: true,
  },
  cargo: {
    type: String,
    required: true,
  },
  setor: {
    type: String,
    required: true,
  },
  permissao: {
    type: Number,
    required: true,
  }
}

);

userSchema.methods.matchPassword = async function (senhaLogin) {
  return await bcrypt.compare(senhaLogin, this.senha);
};

userSchema.pre("save", async function(next){
  if(!this.isModified("senha")){
    next()
  }
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt)
})

const User = mongoose.model('User', userSchema);

module.exports = User;