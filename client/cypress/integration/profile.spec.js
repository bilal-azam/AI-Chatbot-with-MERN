// client/cypress/integration/profile.spec.js
describe('Profile Management', () => {
    it('should update user profile', () => {
        cy.visit('/profile');

        cy.get('input[name="name"]').type('Jane Doe');
        cy.get('input[name="email"]').type('jane@example.com');
        cy.get('button[type="submit"]').click();

        cy.contains('Profile updated successfully');
    });
});