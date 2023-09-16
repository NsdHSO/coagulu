describe('ftx-ftm', () => {
  beforeEach(() => cy.visit('/iframe.html?id=ftxftmcomponent--primary'));
  it('should render the component', () => {
    cy.get('coagulu-ftx-ftm').should('exist');
  });
});
