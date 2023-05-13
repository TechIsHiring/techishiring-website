type Size = 'mobile' | 'desktop'

const validateFooter = (size: Size) => {
  // since both mobile and desktop versions are in the DOM as the same time, we scope with [data-cy]
  const selector = `[data-cy=${size}-footer]`
  
  // test the main navigation links for the site
  cy.validateLink('Home', '/', selector)
  cy.validateLink('TechIsHiring', '/', selector)
  cy.validateLink('Newsletter', 'https://newsletter.techishiring.com/', selector, 'new tab')
  cy.validateLink('About', '/about', selector)
  cy.validateLink('Contact Us', '/contact', selector)

  // now test the SVG icon links at the bottom
  cy.validateLink('Twitter for Tech Is Hiring', 'https://www.twitter.com/techishiring', selector, 'new tab')
  cy.validateLink('GitHub for Tech Is Hiring', 'https://www.github.com/techishiring', selector, 'new tab')
  cy.validateLink('LinkedIn for Tech Is Hiring', 'https://www.linkedin.com/company/techishiring', selector, 'new tab')
  cy.validateLink('Patreon for Tech Is Hiring', 'https://www.patreon.com/techishiring', selector, 'new tab')
  cy.validateLink('Tech Is Hiring Newsletter on Substack', 'https://newsletter.techishiring.com/', selector, 'new tab')

  cy.contains(`${selector} p`, `© Copyright ${new Date().getFullYear()}, All rights reserved.`).should('be.visible')
  cy.contains(`${selector} p`, `Website designed by Inetimi Ade (aidinetimi@gmail.com)`).should('be.visible')

}

export default validateFooter