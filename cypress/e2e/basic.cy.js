/// <reference types="cypress" />

describe('RegistrationForm', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173'); // Visit the URL where your React app is running
  });

  it('should display error messages for empty fields', () => {
    cy.get('input[placeholder="name"]').type(' ');
    cy.get('input[placeholder="email"]').type(' ');
    cy.contains('Name is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
  });

  it('should display error message for invalid email', () => {
    cy.get('input[placeholder="name"]').type('John Doe');
    cy.get('input[placeholder="email"]').type('invalid-email');

    cy.contains('Invalid email address').should('be.visible');
  });

  it('should log form data to console on valid submission', () => {
    cy.window().its('console').then((console) => {
      cy.stub(console, 'log').as('consoleLogs');

      cy.get('input[placeholder="name"]').type('John Doe');
      cy.get('input[placeholder="email"]').type('john@example.com');
      cy.get('button[type="submit"]').click();

      cy.get('@consoleLogs').should('be.calledWithExactly', {
        name: 'John Doe',
        email: 'john@example.com',
      });
    });
  });

 


});