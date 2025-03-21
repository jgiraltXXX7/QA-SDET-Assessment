class LoginPage {


//Selector
emailInputfield = 'input[formcontrolname="email"]'
passwordInputfield = 'input[formcontrolname="password"]'
autenticarbutton = 'button[type="submit"]'

  validateLoginPage() {
    cy.get(this.emailInputfield).should('be.visible');
    cy.get(this.passwordInputfield).should('be.visible');
    cy.get(this.autenticarbutton).invoke('show').should('contain', 'Autenticar');
  }

  login(email, password) {
    cy.get(this.emailInputfield).type(email);
    cy.get(this.passwordInputfield).type(password);
    cy.get(this.autenticarbutton).click();
  }

  validateLoginSuccess() {
    cy.url().should('include', '/dashboard');
  }
}

export default new LoginPage();