describe('Error Handling', () => {
    it('should display error page on server error', () => {
        cy.visit('/api/trigger-error');
        cy.contains('Something went wrong.');
    });
});