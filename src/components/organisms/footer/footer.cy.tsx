import React from 'react'
import Footer from './footer'
import validateFooter from '../../../../cypress/util/validateFooter'

describe('<Footer />', () => {
  it('renders mobile footer', () => {
    cy.mount(<Footer />)
    validateFooter('mobile')
  })
  it('renders desktop footer', {
    viewportWidth: 1200
  }, () => {
    cy.mount(<Footer />)
    validateFooter('desktop')
  })
})