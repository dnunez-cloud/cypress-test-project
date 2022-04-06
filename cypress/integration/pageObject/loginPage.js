class LoginPage {
  navigate() {
    cy.visit('/')
  }

  enterUsername(username) {
    cy.get('[placeholder="Username"]').clear()
    cy.get('[placeholder="Username"]').type(username);
    return this
  }

  enterPassword(pswd) {
    cy.get('[placeholder="Password"]')
      .clear()
      .type(pswd)
    return this
  }

  submit() {
    cy.get('#login-button').click()
  }
}

export default LoginPage