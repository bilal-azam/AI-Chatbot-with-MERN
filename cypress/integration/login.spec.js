describe('Login', () => {
    it('should allow a user to log in', () => {
        cy.visit('/login');
        cy.get('input[name="email"]').type('test@example.com');
        cy.get('input[name="password"]').type('password');
        cy.get('button').click();
        cy.url().should('include', '/items');
    });
});