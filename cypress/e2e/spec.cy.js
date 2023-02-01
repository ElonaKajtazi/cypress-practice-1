///<reference types="cypress" />

it('should be able to add a todo', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')
  cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}')
  cy.get('.toggle').click()
  cy.contains('Clear').click()
})