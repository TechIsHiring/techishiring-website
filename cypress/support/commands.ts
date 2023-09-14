/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
export {};

declare global {
  namespace Cypress {
    interface Chainable {
        validateLink(name: string, destination : string, target?: 'new tab'): Chainable<void>
    }
  }
}


  /**
   * 
   * @param name - the name of the link
   * @param destination - the URL the link navigates to 
   * @param target - target attribute - e.g. "new tab" or not
   */
  const validateLink = (name: string, destination : string, target?: 'new tab') => {
    const shouldOpenInNewTab = target === 'new tab'
    const targetAssertion = shouldOpenInNewTab ? 'have.attr' : 'not.have.attr'
   
    // find a link with the expected name
    cy.contains(`a`, name)
    .should('be.visible') // make sure it is visible
    .and('have.attr', 'href', destination) // and has the right href
    .and(targetAssertion, 'target', '_blank') // and opens in a new tab, or not
  }

  Cypress.Commands.add('validateLink', validateLink)