/// <reference types="cypress" />

it('A/B test - variation A', () => {

  cy
    .setCookie('optimizelyBuckets', '%7B%22298349752%22%3A%22298291000%22%7D')
    .setCookie('optimizelyEndUserId', 'oeu1616187660398r0.020344619322813617')
    .setCookie('optimizelySegments', '%7B%7D')

  cy
    .visit('/abtest')

  cy
    .contains('h3', 'A/B Test Control')
    .should('be.visible')

});

it('A/B test - variation B', () => {

  cy
    .setCookie('optimizelyBuckets', '%7B%22298349752%22%3A%22298343790%22%7D')
    .setCookie('optimizelyEndUserId', 'oeu1616187909249r0.37899228994326006')
    .setCookie('optimizelySegments', '%7B%7D')

  cy
    .visit('/abtest')

  cy
    .contains('h3', 'A/B Test Variation 1')
    .should('be.visible')

});