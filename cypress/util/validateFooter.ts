type Size = 'mobile' | 'desktop'

const validateFooter = (size: Size) => {

    cy.log('-----START FOOTER-----')
    // since both mobile and desktop versions are in the DOM as the same time, we scope with [data-cy]
    cy.get(`[data-cy=${size}-footer]`).within(() => {
        cy.validateLink('Home', '/')
        cy.validateLink('TechIsHiring', '/')
        cy.validateLink('Newsletter', 'https://newsletter.techishiring.com/', 'new tab')
        cy.validateLink('About', '/about')
        cy.validateLink('Contact Us', '/contact')
    
        // now test the SVG icon links at the bottom
        cy.validateLink('Twitter for Tech Is Hiring', 'https://www.twitter.com/techishiring', 'new tab')
        cy.validateLink('GitHub for Tech Is Hiring', 'https://www.github.com/techishiring', 'new tab')
        cy.validateLink('LinkedIn for Tech Is Hiring', 'https://www.linkedin.com/company/techishiring', 'new tab')
        cy.validateLink('Patreon for Tech Is Hiring', 'https://www.patreon.com/techishiring', 'new tab')
        cy.validateLink('Tech Is Hiring Newsletter on Substack', 'https://newsletter.techishiring.com/', 'new tab')
    
        cy.contains(`p`, `© Copyright ${new Date().getFullYear()}, All rights reserved.`).should('be.visible')
        cy.contains(`p`, `Website designed by Inetimi Ade (aidinetimi@gmail.com)`).should('be.visible')
    })
    // test the main navigation links for the site
    cy.log('-----END FOOTER-----')
}

export default validateFooter