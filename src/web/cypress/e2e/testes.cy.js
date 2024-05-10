describe('Teste de login', () => {
  it('Deve fazer login com sucesso', () => {
    // Visite a página de login
    cy.visit('localhost:5173/');

    // Insira o e-mail e senha nos campos de login
    cy.get('input[name="email"]').type('alvaro2@gmail.com');
    cy.get('input[name="password"]').type('1234');
    cy.get('#btn-login').click();
  })

  it('Não deve fazer login com sucesso', () => {
    // Visite a página de login
    cy.visit('localhost:5173/');

    // Insira o e-mail e senha nos campos de login
    cy.get('input[name="email"]').type('alvaro2@gmail');
    cy.get('input[name="password"]').type('1234');
    cy.get('#btn-login').click();
  })

  it('Deve cadastrar uma nota', () => {
    // Visite a página de login
  cy.login('alvaro2@gmail','1234')

  cy.get('#home-criar-tarefa').click();

  cy.get('#titulo').type('teste automatizado');

  cy.get('#react-select-3-input').click()
  cy.contains('adm').click();

  cy.get('#create-task-datafinal').type('10/05/2024')




  })

})