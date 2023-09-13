describe('ftx-sivan-shared', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=sivaninputcomponent--primary&args=hintTop;mainControl;currencyControl;placeholder;colorMatIcon;choices;'
    )
  );
  it('should render the component', () => {
    cy.get('sivan-input').should('exist');
  });
});
