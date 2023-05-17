import validateFooter from "../util/validateFooter";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000",  { timeout: 30000 });
  });

  it("should display the homepage", () => {
    cy.title().should("include", "TechIsHiring");
    cy.get("header").should("be.visible");
    cy.get('.sticky > :nth-child(1) > a > .chakra-text').contains('TechIsHiring');
    cy.get('header > div > nav > ul').should('be.visible');

    validateFooter('desktop')
  });
});
