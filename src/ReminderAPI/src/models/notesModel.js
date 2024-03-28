'use strict';
const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({

  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  criador: {
    type: String,
    required: true,
  },
  destinatario: {
    type: String,
    required: true,
  },
  datafinal: {
    type: Date,
    required: true,
  },
  situacao: {
    type: String,
    required: true,
  },
});


const Notes = mongoose.model('Notes', NotesSchema);

module.exports = Notes;

