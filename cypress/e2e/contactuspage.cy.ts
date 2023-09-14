
describe("Contact Us Image Rendering", () => {
    beforeEach(() => {
        cy.visit("/contact",  { timeout: 30000 });
      });

    it("Image rendering on desktop", () =>{
        cy.viewport('macbook-11')
        cy.get('[data-testid="desktop"] > img')
        .should('be.visible')
        .and('have.prop', 'naturalWidth')
        .should('be.greaterThan', 0)
    })

      it("Background Image rendering on mobile", () =>{
        cy.viewport('iphone-5')
        cy.get('[data-testid="mobile"] > img')
        .should("be.visible")
        .and('have.prop', 'naturalWidth')
        .should('be.greaterThan', 0)
     })
})