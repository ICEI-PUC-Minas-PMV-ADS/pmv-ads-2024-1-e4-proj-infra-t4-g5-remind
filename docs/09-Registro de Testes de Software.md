# Registro de Testes de Software

# Casos de Teste Usuários 

## Caso de teste 01 - Cadastro do Usuário
```js 
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
```
### Resultado:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t4-g5-remind/assets/13721147/e0b0c187-383d-41a2-893c-e2c88317fafb)


## Caso de teste 02 - Login de Usuário
```js
it('should login the user', async () => {
    const userInfo = {
      email: 'joao@muitos.com',
      senha: 'SenhaSuperSeguraNgmVaiSaberConfia321',
    };

    const response = await request(app).post('/users/login').send(userInfo);
    checkStatusCode(response, 200);

    expect(response.status).toBe(200);

    expect(response.body.token).not.toBeNull();

    console.log(response.body.token);

    userToken = response.body.token;
  });
```
### Resultado:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t4-g5-remind/assets/13721147/fc587513-e13d-4202-b287-26d8a0891376)


## Caso de teste 03 - Atualização do Usuário
```js
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
```

### Resultado:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t4-g5-remind/assets/13721147/0e6568cf-3c5b-41d3-b14b-fbc29dce68d5)


## Caso de teste 04 - Consultar dados de todos usuários cadastrados
```js
it('should return a list of users', async () => {
  const response = await request(app)
    .get('/users/get')
    .set('Authorization', `Bearer ${adminToken}`);
  checkStatusCode(response, 200);

  expect(response.status).toBe(200);

  expect(response.body).toBeInstanceOf(Array);

  expect(response.body.length).toBeGreaterThanOrEqual(1);
});
```

### Resultado:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t4-g5-remind/assets/13721147/557bae05-3793-46c5-aa05-32221b23ae37)


## Caso de teste 05 - Consultar dados de um usuário específico
```js
it('should return a user with the specified ID', async () => {
  const response = await request(app)
    .get(`/users/get/${userId}`)
    .set('Authorization', `Bearer ${adminToken}`);
  checkStatusCode(response, 200);

  expect(response.status).toBe(200);
  expect(response.body._id).toEqual(userId);
});
```
### Resultado:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t4-g5-remind/assets/13721147/d8f6b24a-16e9-470d-812e-1066b268b49b)


## Caso de teste 06 - Apagar um Usuário
```js
it('should delete the user with the specified ID', async () => {
  const response = await request(app)
    .delete(`/users/delete/${userId}`)
    .set('Authorization', `Bearer ${adminToken}`);
  checkStatusCode(response, 200);

  expect(response.status).toBe(200);
  expect(response.body._id).toEqual(userId);
});
```

### Resultado:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t4-g5-remind/assets/13721147/9e93348e-ec85-4814-8a24-ab10f2d44db2)


## Resultado Total Usuários:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t4-g5-remind/assets/13721147/e4d5aa1e-ad67-426b-9d7c-39f874f52c34)


# Casos de Teste Tarefas

## Caso de teste 01 - Cadastro de Tarefa
```js
it('should return a new note', async () => {
  const newNoteInfo = {
    titulo: 'Título da nota',
    descricao: 'Descrição da nota',
    destinatario: '65f37cd454bcbb6b9b3f04c1',
    datafinal: new Date(),
    situacao: 'Pendente',
  };

  const response = await request(app)
    .post('/notes/criar')
    .set('Authorization', `Bearer ${adminToken}`)
    .send(newNoteInfo);
  checkStatusCode(response, 201);

  expect(response.status).toBe(201);

  expect(response.body._id).not.toBeNull();

  console.log(response.body._id);

  noteId = response.body._id;
});
```

### Resultado:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t4-g5-remind/assets/13721147/2a778a9e-cd93-44de-b4e8-924e08184ea9)


## Caso de teste 02 - Atualização de dados do tarefa
```js
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
```

### Resultado:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t4-g5-remind/assets/13721147/f5621971-992f-43b9-84c9-b64a167f82e3)


## Caso de teste 03 - Consultar todas tarefas criadas por um usuário específico
```js
it('should return a list of all notes where user is the creator', async () => {
  const response = await request(app)
    .get('/notes/get/criador')
    .set('Authorization', `Bearer ${adminToken}`);
  checkStatusCode(response, 200);

  expect(response.status).toBe(200);

  expect(response.body).toBeInstanceOf(Array);

  expect(response.body.length).toBeGreaterThanOrEqual(1);
});
```

### Resultado:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t4-g5-remind/assets/13721147/d48691a0-a07b-4412-92fd-54e5cf188160)


## Caso de teste 04 - Consultar todas tarefas destinadas a um usuário específico
```js
it('should return a list of all notes where user is the receiver', async () => {
  const response = await request(app)
    .get('/notes/get/destinatario')
    .set('Authorization', `Bearer ${adminToken}`);
  checkStatusCode(response, 200);

  expect(response.status).toBe(200);

  expect(response.body).toBeInstanceOf(Array);

  expect(response.body.length).toBe(0);
});
```

### Resultado:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t4-g5-remind/assets/13721147/472c7e91-ae79-459a-b555-e94c562daedd)


## Caso de teste 05 - Apagar uma Tarefa
```js
it('should delete the note with the specified ID', async () => {
    const response = await request(app)
      .delete(`/notes/delete/${noteId}`)
      .set('Authorization', `Bearer ${adminToken}`);
    checkStatusCode(response, 200);

    expect(response.status).toBe(200);

    expect(response.body._id).toEqual(noteId);
  });
});
```

### Resultado:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t4-g5-remind/assets/13721147/b6a1207a-41c7-444d-ab38-842feabcc9f4)
