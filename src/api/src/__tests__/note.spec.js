const path = require('path');
const dotenv = require('dotenv');
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

// Função própria para lidar com erros do supertest
const checkStatusCode = require('../functions/supertestErrorHandler');

dotenv.config({ path: path.resolve(process.cwd(), './src/.env') });

jest.setTimeout(10000);

describe('Note Controller Integration', () => {
  const adminToken = process.env.ADMIN_TOKEN;
  let noteId = undefined;

  // Fechando conexão com o mongoose para finalizar os testes
  afterAll(() => mongoose.connection.close());

  describe('POST /notes/criar', () => {
    it('should return a new note', async () => {
      const newNoteInfo = {
        titulo: 'Título da nota',
        descricao: 'Descrição da nota',
        destinatario: '65f37cd454bcbb6b9b3f04c1',
        datainicial: new Date(),
        datafinal: new Date().setMonth(new Date().getMonth() + 1),
        situacao: 'Pendente',
      };

      const response = await request(app)
        .post('/notes/criar')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(newNoteInfo);
      checkStatusCode(response, 201);

      expect(response.status).toBe(201);

      expect(response.body._id).not.toBeNull();

      noteId = response.body._id;
    });
  });

  describe('PUT /notes/update/:id', () => {
    it('should update the note', async () => {
      const newNoteInfo = {
        titulo: 'Nota muito boa',
        descricao: 'Tá feito tmj',
        destinatario: '65f37cd454bcbb6b9b3f04c1',
        datafinal: new Date(),
        situacao: 'Concluido',
      };

      const response = await request(app)
        .put(`/notes/update/${noteId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send(newNoteInfo);
      checkStatusCode(response, 200);

      expect(response.status).toBe(200);

      expect(response.body._id).toEqual(noteId);

      expect(response.body.situacao).toEqual(newNoteInfo.situacao);
    });
  });

  describe('GET /notes/get/criador', () => {
    it('should return a list of all notes where user is the creator', async () => {
      const response = await request(app)
        .get('/notes/get/criador')
        .set('Authorization', `Bearer ${adminToken}`);
      checkStatusCode(response, 200);

      expect(response.status).toBe(200);

      expect(response.body).toBeInstanceOf(Array);

      expect(response.body.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('GET /notes/get/destinatario', () => {
    it('should return a list of all notes where user is the receiver', async () => {
      const response = await request(app)
        .get('/notes/get/destinatario')
        .set('Authorization', `Bearer ${adminToken}`);
      checkStatusCode(response, 200);

      expect(response.status).toBe(200);

      expect(response.body).toBeInstanceOf(Array);

      expect(response.body.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('DELETE /notes/delete/:id', () => {
    it('should delete the note with the specified ID', async () => {
      const response = await request(app)
        .delete(`/notes/delete/${noteId}`)
        .set('Authorization', `Bearer ${adminToken}`);
      checkStatusCode(response, 200);

      expect(response.status).toBe(200);

      expect(response.body._id).toEqual(noteId);
    });
  });
});
