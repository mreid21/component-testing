import {mount} from 'cypress/react'
import FilterInput from '../../src/components/FilterInput'
import {options} from '../../src/App'


describe('<FilterInput>', () => {

  beforeEach(() => {
    mount(<FilterInput options={options}/>)
  })


  it('should have and input box', () => {

    cy.get('[data-testid=filter-input] input')
  })

  it('should only contain items matching filter', () => {
    const expected = ['bread', 'eggs']
    cy.get('[data-testid=filter-input] input').type('e')

    cy.get('[data-testid=filter-input] ul').each((item, index) => {
      cy.wrap(item).should('contain.text', expected[index])
    })

  })

  it('should exclude items not matching filter', () => {
    const unexpected = 'milk'
    
    cy.get('[data-testid=filter-input] input').type('e')

    cy.get('[data-testid=filter-input] ul').contains(unexpected).should('not.exist')


  })

})