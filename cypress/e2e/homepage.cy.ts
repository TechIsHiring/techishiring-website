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

    // hero section
    cy.get('[data-test="hero-title"]').should('be.visible');
    
    cy.get('[data-test="hero-flavored-text"]').should('be.visible').and('include.text',"So many jobs available, all you have to do is keep up with our posts. Check below for recent job openings.")
    //  hero image section
    cy.get('[data-test="hero-image"]').should('be.visible');
    cy.get('[data-test="hero-image"]').should('have.attr', 'src').and('include', '/_next/static/media/heroImage.d5ad7d49.svg');
    cy.get('[data-test="hero-image"]').should('have.attr', 'alt').and('not.be.empty');

    validateFooter('desktop')
  });
});
