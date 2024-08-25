describe("About page", () => {
    beforeEach(() => {
        cy.visit("/about",  { timeout: 30000 });
    });
    

    it("Tests about hero component", () => {
        cy.get('[data-test="about-header"]')
            .should('be.visible')
            .and('have.text', "Transnational Job Listing Channel");
        cy.get('[data-test="about-hero-text"]')
            .should('be.visible')
            .and('have.text', "So many jobs available, all you have to do is keep up with our posts. Check below for recent job openings.")
        // test backgdound image
        cy.wait(3000);
        cy.get('[data-test="about-hero-image"]')
            .should('have.css', 'background-image')
            .and('include', 'http://localhost:3000/_next/static/media/about-image1.e324faa8.png');
    });

    it("Tests About Page Content", () => {
        cy.get('[data-test="about-details-one"]').should('be.visible');
        cy.get('[data-test="about-details-two"]').should('be.visible');
        cy.get('[data-test="about-details-three"]').should('be.visible');
        cy.get('[data-test="about-details-four"]')
            .should('be.visible')
            .and('contain.text', "Where great Jobs and great Engineers come to find one another!");     
    });

    it("Tests about page banner", () => {
        cy.get('[data-test="about-banner-header-text"]').should('be.visible').and('contain.text', "Have a question?");
        cy.get('[data-test="about-banner-text"]').should('be.visible').and('contain.text', "If you have any questions, please contact us");
        cy.get('[data-test="about-banner-button"]').should('be.visible').and('contain.text', "Contact Us");
        // test icons and links
        // twitter
        cy.get('a[href="https://www.twitter.com/TechIsHiring"]')
            .should('have.attr', 'href', 'https://www.twitter.com/TechIsHiring');
        cy.viewport(1000, 660);
        cy.get('[data-test="about-details-icon-twitter"]')
            .should('not.exist');
        // linkedIn
        cy.get('a[href="https://www.linkedin.com/company/TechIsHiring"]')
            .should('have.attr', 'href', 'https://www.linkedin.com/company/TechIsHiring');
        cy.viewport(1000, 660);
        cy.get('[data-test="about-details-icon-linkedIn"]')
            .should('not.exist');
        // youtube
        cy.get('a[href="https://www.youtube.com/@TechIsHiring"]')
            .should('have.attr', 'href', 'https://www.youtube.com/@TechIsHiring');
        cy.viewport(1000, 660);
        cy.get('[data-test="about-details-icon-youtube"]')
            .should('not.exist');
    })

    
})