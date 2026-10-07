describe('Login Test', () => {

    it('should open the login page', () => {
        cy.visit('https://www.saucedemo.com/')
})

    it('should login successfully with valid credentials', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include', '/inventory.html')
    })

      it('should shown an error message for an invalid username', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').clear()
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Epic sadface: Username is required')
      })

      it('should shown an error message for an invalid password', () => {
        cy.visit('https://www.saucedemo.com/')


        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('invalid_password')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service')
      })

      it('should shown an error message for an empty username', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').clear()
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username is required')
      })

      it('should shown an error message for an empty password', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').clear()
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Password is required')
      })

      it('should shown an error message for an empty username and password', () => {
        cy.visit('https://www.saucedemo.com/')  

        cy.get('[data-test="username"]').clear()          
        cy.get('[data-test="password"]').clear()
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username is required')
      })

























})