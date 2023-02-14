describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the homepage", () => {
    cy.title().should("include", "TechIsHiring");
    cy.get("header").should("be.visible");
    cy.get("header>div").contains("h1", "Where great jobs and great Engineers go to find each other!");
  });
});