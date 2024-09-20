Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function (){
    cy.get('#firstName').type('Maria')
    cy.get('#lastName').type('Pereira')
    cy.get('#email').type('mariapereira@email.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})