import validateFooter from "../util/validateFooter";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/",  { timeout: 30000 });
  });

  it("should display the homepage", () => {
    cy.title().should("include", "TechIsHiring");
    cy.get("header").should("be.visible");
    cy.get('.sticky > :nth-child(1) > a > .chakra-heading').contains('TechIsHiring');
    cy.get('header > div > nav > ul').should('be.visible');

    validateFooter('desktop')
  });
  it("Should display why choose tech is hiring component", () => {
    cy.get('[dataTest="why-choose-techIsHiring"]').invoke('text').should('eq', 'Why Choose TechIsHiring ?')
    cy.get('[dataTest="twitter"]').invoke('text').should('eq', 'Sources from Twitter')
    cy.get('[dataTest="twitter-content"]').should('be.visible')
     cy.get('[dataTest="date"]').invoke('text').should('eq', 'Up to date')
    cy.get('[dataTest="date-content"]').should('be.visible')
     cy.get('[dataTest="permissions"]').invoke('text').should('eq', 'Permissions')
    cy.get('[dataTest="permissions-content"]').should('be.visible')
  })
});
