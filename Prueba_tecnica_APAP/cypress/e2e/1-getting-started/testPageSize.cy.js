it('Verifica el ancho de la página en diferentes dispositivos', () => {
  cy.visit('https://the-internet.herokuapp.com/login');

  // Establece diferentes tamaños de dispositivos
  cy.viewport('iphone-x');
  cy.get('body').should('have.css', 'width', '375px');

  cy.viewport('ipad-2');
  cy.get('body').should('have.css', 'width', '768px');

  cy.viewport('macbook-15');
  cy.get('body').should('have.css', 'width', '1440px');
});
