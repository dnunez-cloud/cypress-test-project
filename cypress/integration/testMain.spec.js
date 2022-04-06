describe('Login tests', () => {

  beforeEach('open main page',() => {
    cy.visit('/')
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
    cy.get('h3').should('not.exist')
    cy.get('#login-button').click()
    cy.get('h3').should('contain', 'Epic sadface: Username is required')
  })

  //test for error message when clicking login without fill password
  it('empty password',() => {
    cy.get('h3').should('not.exist')
    cy.get('[placeholder="Username"]').type('standard_user')
    cy.get('#login-button').click()
    cy.get('h3').should('contain', 'Epic sadface: Password is required')
  })

  //test for error message when filling wrong username
  it('wrong Username',() => {
    cy.get('h3').should('not.exist')
    cy.get('[placeholder="Username"]').type('user')
    cy.get('[placeholder="Password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('h3').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  //test for error message when filling wrong password
  it('wrong Password',() => {
    cy.get('h3').should('not.exist')
    cy.get('[placeholder="Username"]').type('standard_user')
    cy.get('[placeholder="Password"]').type('user')
    cy.get('#login-button').click()
    cy.get('h3').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('login Happy path',() => {
    cy.get('[placeholder="Username"]').type('standard_user')
    cy.get('[placeholder="Password"]').type('secret_sauce')
    cy.get('#login-button').click()
  })
})