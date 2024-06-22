'use strict';
const Notes = require('../models/notesModel');

async function createNotes(req, res) {
  try {
    const {
      titulo,
      descricao,
      destinatario,
      datainicial,
      datafinal,
      situacao,
    } = req.body;

    const criadorId = req.user._id;

    const newNote = new Notes({
      titulo,
      descricao,
      criador: criadorId,
      destinatario,
      datainicial,
      datafinal,
      situacao,
    });

    const noteSaved = await newNote.save();

    res.status(201).json(noteSaved);
  } catch (erro) {
    res
      .status(500)
      .json({ mensagem: 'Erro ao criar nota', erro: erro.message });
  }
}

async function update(req, res) {
  try {
    const notes = await Notes.findById(req.params.id);

    if (!notes) {
      res.status(404).json('Nota nao existe');
    }

    notes.titulo = req.body.titulo || notes.titulo;
    notes.descricao = req.body.descricao || notes.descricao;
    notes.criador = req.body.criador || notes.criador;
    notes.destinatario = req.body.destinatario || notes.destinatario;
    notes.datafinal = req.body.datafinal || notes.datafinal;
    notes.dataconclusao = req.body.dataconclusao || notes.dataconclusao;
    notes.situacao = req.body.situacao || notes.situacao;

    const updateNote = await notes.save();
    res.status(200).json(updateNote);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar nota' });
  }
}

async function getCriadorById(req, res) {
  try {
    const userId = req.user._id.toString(); // Obtém o ID do usuário autenticado
    // necessário o cast para string para que o ID seja comparável ao id do destinatario que é String
    const notes = await Notes.collection
      .aggregate([
        {
          // Filtra as notas que possuem o ID do usuário autenticado como criador
          $match: {
            criador: userId,
          },
        },
        // Converte o ID do criador para ObjectId
        { $set: { destinatario: { $toObjectId: '$destinatario' } } },
        {
          $lookup: {
            from: 'users',
            localField: 'destinatario',
            foreignField: '_id',
            // Remove os campos desnecessários do usuário
            pipeline: [
              {
                $project: {
                  senha: 0,
                  createdAt: 0,
                  updatedAt: 0,
                  __v: 0,
                },
              },
            ],
            as: 'userInfo'
          }
        },
        // Desconstrói o array userInfo, preservando os documentos que não têm correspondência
        {
          $unwind: {
            path: '$userInfo',
            preserveNullAndEmptyArrays: true
          }
        },
        // Se userInfo não existir (porque o $lookup não encontrou correspondência), define-o como um array vazio
        {
          $addFields: {
            userInfo: { $ifNull: ['$userInfo', []] }
          }
        }
      ])
      .toArray();

    res.status(200).json(notes);
  } catch (error) {
    console.error('Erro ao buscar usuário por ID:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
}

async function getDestinatarioById(req, res) {
  try {
    const userId = req.user._id.toString(); // Obtém o ID do usuário autenticado

    const notes = await Notes.collection
      .aggregate([
        {
          // Filtra as notas que possuem o ID do usuário autenticado como destinatário
          $match: {
            destinatario: userId,
          },
        },
        // Converte o ID do criador para ObjectId
        {
          $set: {
            criador: { $toObjectId: '$criador' }
          }
        },
        {
          $lookup: {
            from: 'users',
            localField: 'criador',
            foreignField: '_id',
            // Remove os campos desnecessários do usuário
            pipeline: [
              {
                $project: {
                  senha: 0,
                  createdAt: 0,
                  updatedAt: 0,
                  __v: 0,
                },
              },
            ],
            as: 'userInfo'
          }
        },
        // Desconstrói o array userInfo, preservando os documentos que não têm correspondência
        {
          $unwind: {
            path: '$userInfo',
            preserveNullAndEmptyArrays: true
          }
        },
        // Se userInfo não existir (porque o $lookup não encontrou correspondência), define-o como um array vazio
        {
          $addFields: {
            userInfo: { $ifNull: ['$userInfo', []] }
          }
        }
      ])
      .toArray();

    res.status(200).json(notes);
  } catch (error) {
    console.error('Erro ao buscar usuário por ID:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
}

async function getById(req, res) {
  try {
    const noteId = req.params.id;
    const foundNote = await Notes.findById(noteId);

    if (!foundNote) {
      return res.status(404).json({ mensagem: 'Nota não encontrada' });
    }

    res.status(200).json(foundNote);
  } catch (error) {
    console.error('Erro ao exibir nota por ID:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
}


async function deleteById(req, res) {
  try {
    const noteId = req.params.id;
    const deletedNote = await Notes.findByIdAndDelete(noteId);

    if (!deletedNote) {
      return res.status(404).json({ mensagem: 'Nota não encontrada' });
    }

    res.status(200).json(deletedNote);
  } catch (error) {
    console.error('Erro ao excluir nota por ID:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
}


module.exports = {
  createNotes,
  update,
  getCriadorById,
  getDestinatarioById,
  deleteById,
  getById,
};