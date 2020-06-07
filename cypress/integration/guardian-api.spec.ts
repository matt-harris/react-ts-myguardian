describe('Guardian Open API', () => {
  beforeEach(() => {
    cy.request('/?api-key=test').as('api');
  });

  it('Validates the header', () => {
    cy.get('@api').its('headers').its('content-type').should('include', 'application/json');
  });

  it('Validates the response status', () => {
    cy.get('@api').its('status').should('equal', 200);
  });
});
