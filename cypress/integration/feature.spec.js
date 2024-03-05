describe('Feature Tests', () => {
    it('should display list of items', () => {
        cy.visit('/items');
        cy.get('ul').should('exist');
    });

    it('should allow creating a new item', () => {
        cy.visit('/items/new');
        cy.get('input[name="name"]').type('New Item');
        cy.get('button').click();
        cy.contains('New Item');
    });
});