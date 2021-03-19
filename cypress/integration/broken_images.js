/// <reference types="cypress" />

it('Broken images', () => {

  cy
    .intercept('GET', '/img/avatar-blank.jpg')
    .as('avatar')

  cy
    .intercept('GET', '/hjkl.jpg')
    .as('hjkl')

  cy
    .intercept('GET', '/asdf.jpg')
    .as('asdf')

  cy
    .visit('/broken_images')

  cy
    .wait('@hjkl')
    .its('response.statusCode')
    .should('not.eq', 404)

  cy
    .wait('@asdf')
    .its('response.statusCode')
    .should('not.eq', 404)

  cy
    .wait('@avatar')
    .its('response.statusCode')
    .should('not.eq', 404)

});