import { validateHeaderLinks, validateHeaderLogo, validateModalMenuLinks } from "../util/validateHeader";
import validateFooter from "../util/validateFooter";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/",  { timeout: 30000 });
    cy.wait(100);
  });

  it("should display the homepage", () => {
    cy.title().should("include", "TechIsHiring");
    
    validateHeaderLogo();
    validateHeaderLinks();

    validateFooter('desktop');
  });

  it("should display the homepage on mobile", () => {
    cy.viewport('iphone-5');

    cy.title().should("include", "TechIsHiring");
    validateHeaderLogo();
    cy.get('[data-cy=header]').within(() => {
      cy.get('nav').click();
    });
    validateModalMenuLinks();

    validateFooter('mobile');
  })
});
