'use strict';
const Notes = require('../models/notesModel');
const validacao = require('../functions/validations');
const Auth = require("../middleware/auth");

async function createNotes(req, res) {


    try {
        const { titulo, descricao, destinatario,criador ,datafinal,situacao } = req.body;

        const criadorId = req.user._id

        const newNote = new Notes({
            titulo,
            descricao,
            criador: criadorId,
            destinatario,
            datafinal,
            situacao
        });

        const noteSaved = await newNote.save();


        res.status(201).json({ mensagem: 'Nota criada com sucesso', nota: noteSaved });
        
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao criar nota', erro: erro.message });
    }
}

async function update(req, res){
    try {
    const notes = await Notes.findById(req.params.id)
  
  
    if(!notes){
      res.status(404).json("Nota nao existe")
    }
  
    notes.titulo = req.body.titulo || notes.titulo;
    notes.descricao = req.body.descricao || notes.descricao;
    notes.criador = req.body.criador || notes.criador;
    notes.destinatario = req.body.destinatario || notes.destinatario;
    notes.datafinal = req.body.datafinal || notes.datafinal;
    notes.situacao = req.body.situacao || notes.situacao;
  

      const updateNote = await notes.save()
      res.status(201).json(updateNote)
    }catch(error){
        res.status(400).json({ mensagem: "Erro ao atualizar nota" });
      }

  }

async function getCriadorById(req, res){

    try {
        const userId = req.user._id;
        const notes = await Notes.find({ criador: userId });
    
        res.status(200).json(notes);
    } catch (error) {
        console.error("Erro ao buscar usuário por ID:", error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }

  }  

async function getDestinatarioById(req, res){
    try {
        const userId = req.user._id; // Obtém o ID do usuário autenticado
        const notes = await Notes.find({ destinatario: userId });
    
        res.status(200).json(notes);
    } catch (error) {
        console.error("Erro ao buscar usuário por ID:", error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }

  }  

async function deleteById(req, res){

        try {
            const noteId = req.params.id;
            const deletedNote = await Notes.findByIdAndDelete(noteId);
            
            if (!deletedNote) {
                return res.status(404).json({ mensagem: "Nota não encontrada" });
            }
    
            res.status(200).json({ mensagem: "Nota excluída com sucesso", nota: deletedNote });
        } catch (error) {
            console.error("Erro ao excluir nota por ID:", error);
            res.status(500).json({ mensagem: "Erro interno do servidor" });
        }
    }


module.exports = {
    createNotes,
    update,
    getCriadorById,
    getDestinatarioById,
    deleteById,
    
};