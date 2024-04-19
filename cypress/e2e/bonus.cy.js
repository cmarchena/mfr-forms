/// <reference types="cypress" />

describe('RegistrationForm', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173'); // Visit the URL where your React app is running
  });

  
  // Bonus task: Test newsletter checkbox functionality
  it('should toggle newsletter checkbox', () => {
    cy.get('input[type="checkbox"]').should('not.be.checked');
    cy.get('input[type="checkbox"]').check().should('be.checked');
    cy.get('input[type="checkbox"]').uncheck().should('not.be.checked');
  });

  // Bonus task: Test form reset functionality
  it('should reset form fields after submission', () => {
    cy.get('input[placeholder="name"]').type('John Doe');
    cy.get('input[placeholder="email"]').type('john@example.com');
    cy.get('button[type="submit"]').click();

    cy.get('input[placeholder="name"]').should('have.value', '');
    cy.get('input[placeholder="email"]').should('have.value', '');
  });
});