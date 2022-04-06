import LoginPage from "../integration/PageObject/LoginPage"
import InventoryPage from "../integration/PageObject/inventoryPage"

describe("Cypress POM Test Suite", function () {
  it("Login with valid credentials", function () {
    const login = new LoginPage();
    login.navigate();
    login.enterUsername('standard_user');
    login.enterPassword('secret_sauce');
    login.submit();
    cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
  })
})