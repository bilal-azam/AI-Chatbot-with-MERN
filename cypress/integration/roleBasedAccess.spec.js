describe('Role-Based Access Control', () => {
    it('should allow admin to access item list', () => {
        cy.loginAsAdmin();
        cy.visit('/items');
        cy.get('li').should('exist');
    });

    it('should deny non-admin user access to restricted actions', () => {
        cy.loginAsUser();
        cy.visit('/items');
        cy.get('button').should('not.exist');
    });
});