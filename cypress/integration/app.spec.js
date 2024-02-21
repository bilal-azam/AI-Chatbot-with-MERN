describe('App', () => {
    it('should load the homepage', () => {
        cy.visit('/');
        cy.contains('Welcome to MyApp');
    });

    it('should allow user login', () => {
        cy.visit('/login');
        cy.get('input[name="email"]').type('user@example.com');
        cy.get('input[name="password"]').type('password');
        cy.get('button').click();
        cy.contains('Dashboard');
    });
});