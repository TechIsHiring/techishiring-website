export const validateHeaderLogo = () => {

    cy.log('-----START HEADER LOGO-----')
    // since both mobile and desktop versions are in the DOM as the same time, we scope with [data-cy]
    cy.get('[data-cy=header]').within(() => {
        cy.validateLink('TechIsHiring', '/')
    })
    // test the main navigation links for the site
    cy.log('-----END HEADER LOGO-----')
}

const validateLinks = () => {
    cy.validateLink('Home', '/')
    cy.validateLink('Newsletter', 'https://newsletter.techishiring.com/', 'new tab')
    cy.validateLink('About', '/about')
    cy.validateLink('Contact Us', '/contact')
}

export const validateHeaderLinks = () => {
    cy.log('-----START HEADER LINKS-----')
    cy.get('[data-cy=header]').within(() => {
        validateLinks()
    })
    // test the main navigation links for the site
    cy.log('-----END HEADER LINKS-----')
}

export const validateModalMenuLinks = () => {
    cy.log('-----START MODAL MENU LINKS-----')
    // since both mobile and desktop versions are in the DOM as the same time, we scope with [data-cy]
    cy.get('[role=dialog]').within(() => {
        validateLinks()
    })
    // test the main navigation links for the site
    cy.log('-----END MODAL MENU LINKS-----')
}
