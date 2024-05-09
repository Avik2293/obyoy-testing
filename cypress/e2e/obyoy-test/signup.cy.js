describe('Signup', () => {

    it('signup', () => {
        cy.visit('http://localhost:3000/login')

        cy.title().should('eq', 'React App')

        cy.get('.chakra-link').should('have.text', ' Sign up').click()
        cy.get('.chakra-heading').should('have.text', 'Sign Up')

        cy.get('#firstName').type("Avik")
        cy.get('#lastName').type("Sarker")
        cy.get('#email').type("avik@gmail.com")
        cy.get('#password').type("23dr566")
        cy.wait(1000)
        cy.get('.chakra-input__right-element').click()
        cy.wait(1000)
        cy.get('.css-1j5rwhq > .chakra-button').should('have.text', 'Sign up').click()

        cy.wait(1000)
        cy.get('#email').type("admin@gmail.com")
        cy.get('#password').type("admin@gmail.com")
        cy.get('.css-1kbhu3k').click()

        cy.get(':nth-child(1) > .css-1f6dkbv').should('have.text', 'Leaderboard (Balance)')
    });
})