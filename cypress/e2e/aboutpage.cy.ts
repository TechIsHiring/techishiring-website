describe("About page tests", () => {
  beforeEach(() => {
    cy.visit("/about",  { timeout: 30000 });
  });

  it("About header renders", () => {
    cy.get('[data-cy="about-header-header"]')
      .should("be.visible")
      .and("contain", "Transnational Job Listing Channel");
    cy.get('[data-cy="about-header-body"]')
      .should("be.visible")
      .and("contain", "So many jobs available, all you have to do is keep up with  our posts. Check below for recent job openings.");
  });

  it("About banner renders", () => {
    cy.get('[data-cy="about-banner-header"]')
      .should("be.visible")
      .and("contain", "Have a question?");
    cy.get('[data-cy="about-banner-body"]')
      .should("be.visible")
      .and("contain", "If you have any questions, please contact us");
    cy.get('[data-cy="about-banner-button"]')
      .within(() => {
        cy.validateLink('Contact Us', '/contact');
      });
  });

  it("About details renders", () => {
    cy.get(':nth-child(3) > article').should("be.visible")
      .within(() => {
        cy.validateLink('Chad R. Stewart', 'https://www.linkedin.com/in/ChadRStewart/');
        cy.validateLink('#TechIsHiring', 'https://twitter.com/TechIsHiring/');
        cy.validateLink('Hire Chad R. Stewart', '/hire-chad');
      });
  });
});

