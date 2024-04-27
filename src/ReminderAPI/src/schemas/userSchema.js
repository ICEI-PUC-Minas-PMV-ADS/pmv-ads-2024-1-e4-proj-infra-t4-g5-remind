const Joi = require('joi');

const registerSchema = Joi.object({
  nome: Joi.string().trim().required().min(3).messages({
    'string.base': `[nome] deve ser do tipo texto'`,
    'string.empty': `[nome] não pode ser vazio`,
    'string.min': `[nome] tem que ter no mínimo {#limit} caracteres`,
    'any.required': `[nome] é obrigatório`,
  }),
  email: Joi.string().trim().email().required().messages({
    'string.base': `[email] deve ser do tipo texto email'`,
    'string.empty': `[email] não pode ser vazio`,
    'any.required': `[email] é obrigatório`,
  }),
  senha: Joi.string().trim().required().min(3).messages({
    'string.empty': `[senha] não pode ser vazio`,
    'any.required': `[senha] é obrigatório`,
    'string.min': `[senha] tem que ter no mínimo {#limit} caracteres`,
  }),
  cargo: Joi.string().trim().required().min(3).messages({
    'string.empty': `[cargo] não pode ser vazio`,
    'any.required': `[cargo] é obrigatório`,
    'string.min': `[cargo] tem que ter no mínimo {#limit} caracteres`,
  }),
  setor: Joi.string().trim().required().min(3).messages({
    'string.empty': `[setor] não pode ser vazio`,
    'any.required': `[setor] é obrigatório`,
    'string.min': `[setor] tem que ter no mínimo {#limit} caracteres`,
  }),
  permissao: Joi.number().required().min(1).messages({
    'string.empty': `[permissao] não pode ser vazio`,
    'any.required': `[permissao] é obrigatório`,
    'string.min': `[permissao] tem que ter no mínimo {#limit} caracteres`,
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().trim().email().required().messages({
    'string.base': `[email] deve ser do tipo texto email'`,
    'string.empty': `[email] não pode ser vazio`,
    'any.required': `[email] é obrigatório`,
  }),
  senha: Joi.string().trim().required().min(3).messages({
    'string.empty': `[senha] não pode ser vazio`,
    'any.required': `[senha] é obrigatório`,
    'string.min': `[senha] tem que ter no mínimo {#limit} caracteres`,
  }),
});

const updateSchema = Joi.object({
  nome: Joi.string().trim().min(3).messages({
    'string.base': `[nome] deve ser do tipo texto'`,
    'string.empty': `[nome] não pode ser vazio`,
    'string.min': `[nome] tem que ter no mínimo {#limit} caracteres`,
    'any.required': `[nome] é obrigatório`,
  }),
  email: Joi.string().trim().email().required().messages({
    'string.base': `[email] deve ser do tipo texto email'`,
    'string.empty': `[email] não pode ser vazio`,
    'any.required': `[email] é obrigatório`,
  }),
  senha: Joi.string().trim().min(3).messages({
    'string.empty': `[senha] não pode ser vazio`,
    'any.required': `[senha] é obrigatório`,
    'string.min': `[senha] tem que ter no mínimo {#limit} caracteres`,
  }),
  cargo: Joi.string().trim().min(3).messages({
    'string.empty': `[cargo] não pode ser vazio`,
    'any.required': `[cargo] é obrigatório`,
    'string.min': `[cargo] tem que ter no mínimo {#limit} caracteres`,
  }),
  setor: Joi.string().trim().min(3).messages({
    'string.empty': `[setor] não pode ser vazio`,
    'any.required': `[setor] é obrigatório`,
    'string.min': `[setor] tem que ter no mínimo {#limit} caracteres`,
  }),
  permissao: Joi.number().min(1).messages({
    'string.empty': `[permissao] não pode ser vazio`,
    'any.required': `[permissao] é obrigatório`,
    'string.min': `[permissao] tem que ter no mínimo {#limit} caracteres`,
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
  updateSchema,
};
