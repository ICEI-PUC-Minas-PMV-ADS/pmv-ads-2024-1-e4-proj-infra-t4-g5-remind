// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
 Cypress.Commands.add('login', (email, password) => { 
    cy.visit('localhost:5173/');

    // Insira o e-mail e senha nos campos de login
    cy.get('input[name="email"]').type('alvaro2@gmail.com');
    cy.get('input[name="password"]').type('1234');
    cy.get('#btn-login').click();
 })

