describe('JobSearch', () => {
    it('visits home, selects a tech and searches for related jobs which are displayed on the results page', () => {
        cy.visit('http://localhost:1234')

        cy.get('[data-testid="tech_0"]').click()
        cy.get('[data-testid="searchButton"]').click()

        cy.url().should('include', '/jobs/')
        cy.get('[data-testid="jobEntry"]').should('have.length.above', 1);
    })
})