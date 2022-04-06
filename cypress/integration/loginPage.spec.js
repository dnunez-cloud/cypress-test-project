import LoginPage from "../integration/PageObject/LoginPage"

describe('Login tests', () => {

  beforeEach('open main page',() => {
    const login = new LoginPage();
    login.navigate();
  })

  //check if fields are in the page
  it('check form fields exists',() => {
    cy.get('form')
    cy.get('[placeholder="Username"]')
    cy.get('[placeholder="Password"]')
    cy.get('#login-button')
  })

  //test for error message when clicking login without fill username
  it('empty username',() => {
    const login = new LoginPage();
    cy.get('h3').should('not.exist')
    login.submit();
    cy.get('h3').should('contain', 'Epic sadface: Username is required')
  })

  //test for error message when clicking login without fill password
  it('empty password',() => {
    const login = new LoginPage();
    cy.get('h3').should('not.exist')
    login.enterUsername('standard_user');
    login.submit();
    cy.get('h3').should('contain', 'Epic sadface: Password is required')
  })

  //test for error message when filling wrong username
  it('wrong Username',() => {
    const login = new LoginPage();
    cy.get('h3').should('not.exist')
    login.enterUsername('user');
    login.enterPassword('secret_sauce');
    login.submit();
    cy.get('h3').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  //test for error message when filling wrong password
  it('wrong Password',() => {
    const login = new LoginPage();
    cy.get('h3').should('not.exist')
    login.enterUsername('standard_user');
    login.enterPassword('user');
    login.submit();
    cy.get('h3').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('login Happy path',() => {
    const login = new LoginPage();
    login.enterUsername('standard_user');
    login.enterPassword('secret_sauce');
    login.submit();
    cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
  })
})