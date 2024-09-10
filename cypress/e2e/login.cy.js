import { loginPage } from '../support/page_objects/loginPage';
import { truckPage } from "../support/page_objects/truckPage";

describe('Login Test Suite', () => {

  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should successfully log in with valid credentials', () => {
    
    cy.fixture('loginData').then((data) => {
        loginPage.login(data.validUser.email, data.validUser.password);
        cy.acceptCookies();
        truckPage.verifyTruckPageElements();
    });

  });

//   it('should show an error message with invalid credentials', () => {
//     // Attempt login with invalid credentials
//     loginPage.login('invalidUsername', 'invalidPassword');
    
//     // Add assertions to verify the error message
//     cy.get('.error-message').should('contain', 'Invalid credentials');
//   });
});
