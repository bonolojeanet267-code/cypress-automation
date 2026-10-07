describe('Checkout E2E Tests', () => {

  it('should complete a purchase successfully', () => {

    // 1. Open SauceDemo
    cy.visit('https://www.saucedemo.com/')

    // 2. Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // 3. Verify successful login
    cy.url().should('include', '/inventory.html')

    // 4. Add Sauce Labs Backpack to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // 5. Open shopping cart
    cy.get('[data-test="shopping-cart-link"]').click()

    // 6. Verify product is in the cart
    cy.get('[data-test="inventory-item"]')
      .should('be.visible')
      .and('contain', 'Sauce Labs Backpack')

    // 7. Click Checkout
    cy.get('[data-test="checkout"]').click()

    // 8. Enter customer information
    cy.get('[data-test="firstName"]').type('Bonolo')
    cy.get('[data-test="lastName"]').type('Jeanet')
    cy.get('[data-test="postalCode"]').type('12345')

    // 9. Continue to checkout overview
    cy.get('[data-test="continue"]').click()

    // 10. Verify checkout overview
    cy.url().should('include', '/checkout-step-two.html')

    // 11. Verify product on checkout overview
    cy.get('[data-test="inventory-item"]')
      .should('be.visible')
      .and('contain', 'Sauce Labs Backpack')

    // 12. Finish purchase
    cy.get('[data-test="finish"]').click()

    // 13. Verify order completion page
    cy.url().should('include', '/checkout-complete.html')

    // 14. Verify confirmation message
    cy.get('[data-test="checkout-complete-container"]')
      .should('be.visible')
      .and('contain', 'Thank you for your order!')
  })

})