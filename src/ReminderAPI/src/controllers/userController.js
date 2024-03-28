'use strict';
const User = require('../models/userModel');
const generateToken = require("../functions/generateToken")
const Auth = require("../middleware/auth")


async function create(req, res) {
    const {nome, email, senha, cargo,setor, permissao} = req.body;
    const userExists = await User.findOne({email})
    
    console.log(req.user.permissao)

  if(userExists ){
    res.status(400).json('Usuario ja existe')
  }
  else if (req.user.permissao === 0) {
    res.status(400).json('Seu usuario nao tem permissao de criar uma nova conta')
  } 
  else{
    try{

      const user = await User.create({
        nome,
        email,
        senha,
        cargo,
        setor,
        permissao  
      })
      res.status(201).json({ mensagem: 'Usuário criado com sucesso', usuario: user });
    } catch (error){
      res.status(400).json(error)
    }
  
}}

async function login(req, res) {
  const {email, senha} = req.body
  const user = await User.findOne({email})

  if (!user){
    res.status(400).json("Usuario não existe")
  }

if (await user.matchPassword(senha)){
  res.status(200).json({
  _id: user.id,
  nome: user.nome,
  email: user.email,
  token: generateToken(user._id)
})
}else{
  res.status(400).json("Email ou senha invalido")
}

}

async function update(req, res){
  try {
  console.log("a")

  const user = await User.findById(req.params.id)


  if(!user){
    res.status(404).json("Usuario nao existe")
  }

  user.nome = req.body.nome || user.nome;
  user.email = req.body.email || user.email;
  user.cargo = req.body.cargo || user.cargo;
  user.setor = req.body.setor || user.setor;
  user.permissao = req.body.permissao || user.permissao;



    const updateUser = await user.save()
    res.status(201).json(updateUser)
  }catch(error){
    res.status(400).json(error)
    }
}

async function getById(req, res){
  // console.log("dsad")
  try {
    console.log("dsad")
    const userId = req.params.id
    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json(user);
} catch (error) {
    console.error("Erro ao buscar usuário por ID:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
}
}

async function getAll(req, res) {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        console.error("Erro ao buscar todos os usuários:", error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

async function deleteById(req, res){

  if (req.user.permissao === 1) {
    res.status(400).json('Seu usuario nao tem permissao de deletar conta')
  }
  else{
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    
    if (!deletedUser) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json({ mensagem: "Usuário excluído com sucesso", usuario: deletedUser });
} catch (error) {
    console.error("Erro ao excluir usuário por ID:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
} 
}
}


module.exports = {
  create,
  login,
  update,
  getById,
  getAll,
  deleteById,
};