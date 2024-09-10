Cypress.Commands.add('acceptCookies', () => {
    cy.get('button[type="button"]').contains('Accept Cookies').click({force: true})

  });