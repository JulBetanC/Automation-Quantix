// cypress/e2e/login.cy.js

// Import the LoginPage object
import { loginPage } from '../support/page_objects/loginPage';

describe('Login Test Suite', () => {

  // Before each test, visit the login page
  beforeEach(() => {
    cy.visit('/'); // Replace with your actual login URL
  });

  it('should successfully log in with valid credentials', () => {
    // Use the loginPage object to perform login actions
    loginPage.login('validUsername', 'validPassword');
    
    // Add assertions to verify successful login
    cy.url().should('include', '/dashboard'); // Assuming /dashboard is the URL after login
    cy.get('.welcome-message').should('contain', 'Welcome'); // Example assertion
  });

  it('should show an error message with invalid credentials', () => {
    // Attempt login with invalid credentials
    loginPage.login('invalidUsername', 'invalidPassword');
    
    // Add assertions to verify the error message
    cy.get('.error-message').should('contain', 'Invalid credentials');
  });
});
