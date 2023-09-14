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
});
