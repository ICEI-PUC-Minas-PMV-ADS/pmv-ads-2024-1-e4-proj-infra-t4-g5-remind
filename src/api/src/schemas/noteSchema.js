const Joi = require('joi');

const registerSchema = Joi.object({
  titulo: Joi.string().trim().required().min(3).messages({
    'string.base': `[titulo] deve ser do tipo texto'`,
    'string.empty': `[titulo] não pode ser vazio`,
    'string.min': `[titulo] tem que ter no mínimo {#limit} caracteres`,
    'any.required': `[titulo] é obrigatório`,
  }),
  descricao: Joi.string().trim().required().min(3).messages({
    'string.base': `[descricao] deve ser do tipo texto'`,
    'string.empty': `[descricao] não pode ser vazio`,
    'string.min': `[descricao] tem que ter no mínimo {#limit} caracteres`,
    'any.required': `[descricao] é obrigatório`,
  }),
  destinatario: Joi.string().trim().required().min(3).messages({
    'string.base': `[destinatario] deve ser do tipo texto'`,
    'string.empty': `[destinatario] não pode ser vazio`,
    'string.min': `[destinatario] tem que ter no mínimo {#limit} caracteres`,
    'any.required': `[destinatario] é obrigatório`,
  }),
  datainicial: Joi.date().required().messages({
    'date.base': `[datainicial] deve ser do tipo data'`,
    'date.empty': `[datainicial] não pode ser vazio`,
    'any.required': `[datainicial] é obrigatório`,
  }),
  datafinal: Joi.date().required().messages({
    'date.base': `[datafinal] deve ser do tipo data'`,
    'date.empty': `[datafinal] não pode ser vazio`,
    'any.required': `[datafinal] é obrigatório`,
  }),
  situacao: Joi.string().trim().required().min(3).messages({
    'string.base': `[situacao] deve ser do tipo texto'`,
    'string.empty': `[situacao] não pode ser vazio`,
    'string.min': `[situacao] tem que ter no mínimo {#limit} caracteres`,
    'any.required': `[situacao] é obrigatório`,
  }),
});

const updateSchema = Joi.object({
  titulo: Joi.string().trim().required().min(3).messages({
    'string.base': `[titulo] deve ser do tipo texto'`,
    'string.empty': `[titulo] não pode ser vazio`,
    'string.min': `[titulo] tem que ter no mínimo {#limit} caracteres`,
    'any.required': `[titulo] é obrigatório`,
  }),
  descricao: Joi.string().trim().required().min(3).messages({
    'string.base': `[descricao] deve ser do tipo texto'`,
    'string.empty': `[descricao] não pode ser vazio`,
    'string.min': `[descricao] tem que ter no mínimo {#limit} caracteres`,
    'any.required': `[descricao] é obrigatório`,
  }),
  destinatario: Joi.string().trim().required().min(3).messages({
    'string.base': `[destinatario] deve ser do tipo texto'`,
    'string.empty': `[destinatario] não pode ser vazio`,
    'string.min': `[destinatario] tem que ter no mínimo {#limit} caracteres`,
    'any.required': `[destinatario] é obrigatório`,
  }),
  datainicial: Joi.date().required().messages({
    'date.base': `[datainicial] deve ser do tipo data'`,
    'date.empty': `[datainicial] não pode ser vazio`,
    'any.required': `[datainicial] é obrigatório`,
  }),
  datafinal: Joi.date().required().messages({
    'date.base': `[datafinal] deve ser do tipo data'`,
    'date.empty': `[datafinal] não pode ser vazio`,
    'any.required': `[datafinal] é obrigatório`,
  }),
  situacao: Joi.string().trim().required().min(3).messages({
    'string.base': `[situacao] deve ser do tipo texto'`,
    'string.empty': `[situacao] não pode ser vazio`,
    'string.min': `[situacao] tem que ter no mínimo {#limit} caracteres`,
    'any.required': `[situacao] é obrigatório`,
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
  updateSchema,
};
