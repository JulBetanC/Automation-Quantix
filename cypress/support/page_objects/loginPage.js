class LoginPage {

    //Objects & locators
    
    usernameField = '#email'; 
    passwordField = '#password'; 
    loginButton = '[data-testid="login-button"]';      
  
    // Methods to interact with elements
    enterUsername(username) {
      cy.get(this.usernameField).type(username);
    }
  
    enterPassword(password) {
      cy.get(this.passwordField).type(password);
    }
  
    clickLoginButton() {
      cy.get(this.loginButton).click();
    }
  
    login(username, password) {
      this.enterUsername(username);
      this.enterPassword(password);
      this.clickLoginButton();
    }
  }
  
  // Export an instance of the class
  export const loginPage = new LoginPage();
  