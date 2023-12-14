// client/cypress/integration/chatbot.spec.js
describe('Chatbot Interaction', () => {
    it('should send a message and display response', () => {
        cy.visit('/');
        cy.get('input').type('Hello');
        cy.get('button').click();
        cy.contains('Message received').should('be.visible');
    });
});