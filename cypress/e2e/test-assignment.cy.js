import { DOMAIN_URL, PATHS, SELECTORS } from '../support/constants';

describe('Open flat page and check that it is the right page', () => {

  it ('Check that right flat page is opened', () => {

    cy.visit(`${DOMAIN_URL}${PATHS}`);
    
    cy.get(SELECTORS.dataId)
      .first()
      .click().then(($elem) => {
        cy.url().should('include', $elem.data('id'))
      })
  })
})
