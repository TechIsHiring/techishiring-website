
import ContactContent from "../../src/components/molecules/contact-form/contact-form"

describe('Checks the Contact Us component for accepting three cases of inputs', () => {
  beforeEach(()=> {
    cy.mount(<ContactContent />)
    
    // input text field for name
    cy.get('[data-cy="name-input"]').as('nameInputTextField')
            
    // input text element for email
    cy.get('[data-cy="email-input"]').as('emailInputTextField')
    'data-cy="note-input"'

    // input element for message 
    cy.get('[data-cy="note-input"]').as('messageEmailTextArea')

    // button element 
    cy.get('[data-cy="send-msg-btn"]').as('sendMessageBtn')

  })

    it('Case 1: Show error messages in a new span element when no text is provided in name, email and message inputs in the component', ()=> {
        cy.get('@nameInputTextField').clear()
        cy.get('@emailInputTextField').clear()
        cy.get('@messageEmailTextArea').clear()

        cy.get('@sendMessageBtn').click()

        cy.get('[data-cy="name-error-msg"]').contains('Please add a name')
        cy.get('[data-cy="email-error-msg"]').contains('Please add a proper email address')
        cy.get('[data-cy="note-error-msg"]').contains('Please add a message')
    })

    it("Case 2 : Show the success message after proper inputs for name, email and message inputs are provided", () => {
      cy.fixture('example').as('exampleInput')
      cy.get('@nameInputTextField').type('Tausif Qureshi')
      cy.get('@emailInputTextField').type('tausif2606@gmail.com')
      cy.get('@messageEmailTextArea').type('Hello tech is hiring!')

      cy.intercept('POST','/api/process-email', (req) => {
        const statusCode = 200
        req.reply(statusCode, {data:"Email sent"})

      })
      cy.get('@sendMessageBtn').click()

      cy.get('[data-cy="email-sent-title"]').contains('Thank you for your feedback!')
      cy.get('[data-cy="email-sent-msg"]').contains('We will get back to you as soon as possible!')

    })

    it("Case 3: Show error under the name and message field ", ()=> {
      cy.get('@nameInputTextField').clear()
      cy.get('@emailInputTextField').type('tausif2606@gmail.com')
      cy.get('@messageEmailTextArea').clear()

      cy.get('@sendMessageBtn').click()

      cy.get('[data-cy="name-error-msg"]').contains('Please add a name')
      cy.get('[data-cy="note-error-msg"]').contains('Please add a message')

    })


})