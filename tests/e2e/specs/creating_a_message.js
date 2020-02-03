describe('Creating a Message', () => {
  it('Displays the message in the list', () => {
    cy.visit('/');

    cy.get('[data-test="messageText"]').type("New Message");

    cy.get('[data-test="sendButton"]').click();

    cy.get('[data-test="messageText"]').should('have.value', '');

    cy.contains('New Message');
  });
});