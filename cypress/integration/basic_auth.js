/// <reference types="cypress" />

it('Basic auth', () => {

  cy
    .visit('/basic_auth', {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    })

  cy
    .location('pathname')
    .should('eq', '/basic_auth')

  cy
  .contains('h3', 'Basic Auth')
  .should('be.visible')

  cy
    .contains('p', 'Congratulations! You must have the proper credentials.')
    .should('be.visible')

});