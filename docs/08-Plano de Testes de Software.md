# Plano de Testes de Software

# Casos de Teste Usuários 

| Casos de Teste | Descrição 
| --- | --- | 
| `CT-001`| *Cadastro de usuário* 
| `CT-002`| *Login de usuário* 
| `CT-003`| *Atualização de dados do usuário* 
| `CT-004`| *Consultar dados de todos usuários cadastrados* 
| `CT-005`| *Consultar dados de um usuário específico* 
| `CT-006`| *Apagar um usuário* 

## Caso de teste 01 - Cadastro do Usuário

- Objetivo do Teste: Verificar se o cadastro será realizado.
- Passos: Enviar um POST para a rota API/users/criar com os campos solicitados.
- Critério de Êxito: Retorno do código 201.

## Caso de teste 02 - Login de Usuário

- Objetivo do Teste: Verificar se o usuário conseguirá realizar o login com sucesso.
- Passos: Enviar um POST para a rota API/users/login com os campos solicitados.
- Critério de Êxito: Retorno do código 200.

## Caso de teste 03 - Atualização de dados do usuário

- Objetivo do Teste: Verificar se o cadastro da tarefa será realizado.
- Passos: Enviar um PUT para a rota API/users/update/{id} com os campos solicitados.
- Critério de Êxito: Retorno do código 200.

## Caso de teste 04 - Consultar dados de todos usuários cadastrados

- Objetivo do Teste: Verificar se é possível visualizar todos os dados de todos usuários cadastrados.
- Passos: Enviar um GET para a rota API/users/get.
- Critério de Êxito: Retorno do código 200.

## Caso de teste 05 - Consultar dados de um usuário específico

- Objetivo do Teste: Verificar se é possível visualizar todos os dados de um usuário específico.
- Passos: Enviar um GET para a rota API/users/get/{id}.
- Critério de Êxito: Retorno do código 200.

## Caso de teste 06 - Apagar um Usuário

- Objetivo do Teste: Verificar se o usuário será apagado.
- Passos: Enviar um DELETE para a rota API/users/delete/{id} com os campos solicitados.
- Critério de Êxito: Retorno do código 200.

# Casos de Teste Tarefas 

| Casos de Teste | Descrição 
| --- | --- | 
| `CT-001`| *Cadastro de tarefa* 
| `CT-002`| *Atualização de dados do tarefa* 
| `CT-003`| *Consultar todas tarefas criadas por um usuário específico* 
| `CT-004`| *Consultar todas tarefas destinadas a um usuário específico* 
| `CT-005`| *Apagar uma tarefa* 

## Caso de teste 01 - Cadastro de Tarefa

- Objetivo do Teste: Verificar se o cadastro será realizado.
- Passos: Enviar um POST para a rota API/notes/criar com os campos solicitados.
- Critério de Êxito: Retorno do código 201.

## Caso de teste 02 - Atualização de dados do tarefa

- Objetivo do Teste: Verificar se o cadastro da tarefa será realizado.
- Passos: Enviar um PUT para a rota API/notes/update/{id} com os campos solicitados.
- Critério de Êxito: Retorno do código 200.

## Caso de teste 03 - Consultar todas tarefas criadas por um usuário específico

- Objetivo do Teste: Verificar se é possível visualizar todas as tarefas criadas por um usuário específico.
- Passos: Enviar um GET para a rota API/notes/get/criador.
- Critério de Êxito: Retorno do código 200.

## Caso de teste 04 - Consultar todas tarefas destinadas a um usuário específico

- Objetivo do Teste: Verificar se é possível visualizar todos as tarefas destinadas a um usuário específico.
- Passos: Enviar um GET para a rota API/notes/get/destinatario.
- Critério de Êxito: Retorno do código 200.

## Caso de teste 05 - Apagar uma Tarefa

- Objetivo do Teste: Verificar se a tarefa será apagada.
- Passos: Enviar um DELETE para a rota API/ntoes/delete/{id} com os campos solicitados.
- Critério de Êxito: Retorno do código 200.
