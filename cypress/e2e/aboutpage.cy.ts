describe('About page tests', () => {
  beforeEach(() => {
    cy.visit('/about',  { timeout: 30000 });
  });

  it('About header renders', () => {
    cy.get('[data-cy="about-header-header"]')
      .should('be.visible')
      .and('contain', 'Transnational Job Listing Channel');
    cy.contains('p', 'So many jobs available, all you have to do is keep up with our posts. Check below for recent job openings.')
      .should('be.visible');
  });

  it("About banner renders", () => {
    cy.get('[data-cy="about-banner-header"]')
      .should('be.visible')
      .and('contain', 'Have a question?');
    cy.contains('p', 'If you have any questions, please contact us')
      .should('be.visible');
    cy.get('[data-cy="about-banner-button"]')
      .within(() => {
        cy.validateLink('Contact Us', '/contact');
      });
    cy.contains('p', 'Follow us on Social Media:')
      .should('be.visible');
    cy.get('main > div > section').eq(1)
      .within(() => {
        cy.validateLink('Twitter for Tech Is Hiring', 'https://www.twitter.com/TechIsHiring/')
        cy.validateLink('LinkedIn for Tech Is Hiring', 'https://www.linkedin.com/company/TechIsHiring/')
        cy.validateLink('YouTube for Tech Is Hiring', 'https://www.youtube.com/@TechIsHiring')
      })
  });

  it("About banner renders on mobile", () => {
    cy.viewport('iphone-5')
    cy.get('[data-cy="about-banner-header"]')
      .should('be.visible')
      .and("contain", "Have a question?");
    cy.contains('p', 'If you have any questions, please contact us')
      .should('be.visible');
    cy.get('[data-cy="about-banner-button"]')
      .within(() => {
        cy.validateLink('Contact Us', '/contact');
      });
    cy.contains('p', 'Follow us on Social Media:')
      .should('not.be.visible');
  });

  it('About details renders', () => {
    cy.get('article').should('be.visible')
      .within(() => {
        cy.validateLink('Chad R. Stewart', 'https://www.linkedin.com/in/ChadRStewart/');
        cy.validateLink('#TechIsHiring', 'https://twitter.com/TechIsHiring/');
        cy.validateLink('Hire Chad R. Stewart', '/hire-chad');
      });
  });

  it('About details renders on mobile', () => {
    cy.viewport('iphone-5');
    cy.get('article').should('be.visible')
      .within(() => {
        cy.validateLink('Chad R. Stewart', 'https://www.linkedin.com/in/ChadRStewart/');
        cy.validateLink('#TechIsHiring', 'https://twitter.com/TechIsHiring/');
        cy.validateLink('Hire Chad R. Stewart', '/hire-chad');

        cy.contains('p', 'Follow us');
        cy.validateLink('Twitter for Tech Is Hiring', 'https://www.twitter.com/TechIsHiring/');
        cy.validateLink('LinkedIn for Tech Is Hiring', 'https://www.linkedin.com/company/TechIsHiring/');
        cy.validateLink('YouTube for Tech Is Hiring', 'https://www.youtube.com/@TechIsHiring');
      });
  });
});

