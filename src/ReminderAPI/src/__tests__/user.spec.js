const path = require('path');
const dotenv = require('dotenv');
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

// Função própria para lidar com erros do supertest
const checkStatusCode = require('../functions/supertestErrorHandler');

dotenv.config({ path: path.resolve(process.cwd(), './src/.env') });

jest.setTimeout(10000);

describe('User Controller Integration', () => {
  const adminToken = process.env.ADMIN_TOKEN;
  let userId = undefined;
  let userToken = undefined;

  // Fechando conexão com o mongoose para finalizar os testes
  afterAll(() => mongoose.connection.close());

  describe('POST /users/criar', () => {
    it('should return a new user', async () => {
      const newUserInfo = {
        nome: 'João Diverso',
        email: 'joao@muitos.com',
        senha: 'SenhaSuperSeguraNgmVaiSaberConfia321',
        cargo: 'Product Owner',
        setor: 'Produto',
        permissao: 1,
      };

      const response = await request(app)
        .post('/users/criar')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(newUserInfo);
      checkStatusCode(response, 201);

      expect(response.status).toBe(201);

      expect(response.body._id).not.toBeNull();

      userId = response.body._id;
    });
  });

  describe('POST /users/login', () => {
    it('should login the user', async () => {
      const userInfo = {
        email: 'joao@muitos.com',
        senha: 'SenhaSuperSeguraNgmVaiSaberConfia321',
      };

      const response = await request(app).post('/users/login').send(userInfo);
      checkStatusCode(response, 200);

      expect(response.status).toBe(200);

      expect(response.body.token).not.toBeNull();

      userToken = response.body.token;
    });
  });

  describe('PUT /users/update/:id', () => {
    it('should update the user', async () => {
      const userInfo = {
        nome: 'Paulinho Simplicidade',
        email: 'paulinho@poucos.com',
      };

      const response = await request(app)
        .put(`/users/update/${userId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send(userInfo);
      checkStatusCode(response, 200);

      expect(response.status).toBe(200);

      expect(response.body._id).toEqual(userId);

      expect(response.body.nome).toEqual(userInfo.nome);
    });
  });

  describe('GET /user/list', () => {
    it('should return a list of users', async () => {
      const response = await request(app)
        .get('/users/get')
        .set('Authorization', `Bearer ${adminToken}`);
      checkStatusCode(response, 200);

      expect(response.status).toBe(200);

      expect(response.body).toBeInstanceOf(Array);

      expect(response.body.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('GET /user/:id', () => {
    it('should return a user with the specified ID', async () => {
      const response = await request(app)
        .get(`/users/get/${userId}`)
        .set('Authorization', `Bearer ${adminToken}`);
      checkStatusCode(response, 200);

      expect(response.status).toBe(200);
      expect(response.body._id).toEqual(userId);
    });
  });

  describe('DELETE /user/delete/:id', () => {
    it('should delete the user with the specified ID', async () => {
      const response = await request(app)
        .delete(`/users/delete/${userId}`)
        .set('Authorization', `Bearer ${adminToken}`);
      checkStatusCode(response, 200);

      expect(response.status).toBe(200);
      expect(response.body._id).toEqual(userId);
    });
  });
});
