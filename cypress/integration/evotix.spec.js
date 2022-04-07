
    it("Loads the Evotix app", () => {
    cy.visit('https://stirling.she-development.net/automation')
    cy.wait(1500)
    cy.get('div[class="form-group"]').find('input[name="username"]').type('JeanG')
    cy.get('div[class="form-group"]').find('input[name="password"]').type('Evo@66')
    cy.get('.she-login-buttons').find('#login').click()
    cy.get('.headercolumn-center > :nth-child(2) > .she-nav-menu > .js-she-dropdown-menu > :nth-child(1) > :nth-child(1)').click()
    cy.wait(1000)
    cy.get('[data-area="9"] > :nth-child(1)').click()
    cy.get('.btn-success').click()
    
    cy.get('#SheEnvironmental_Description').click().type('First Record created by Test')
    cy.get('#SheEnvironmental_AssessmentDate').click().type('01042022')
    cy.get('ul > :nth-child(3) > .btn').click()
    cy.wait(1000)
    
    cy.get('.btn-success').click()
    cy.get('#SheEnvironmental_Description').click().type('Second Record created by Test')
    cy.get('#SheEnvironmental_AssessmentDate').click().type('01042022')
    cy.get('ul > :nth-child(3) > .btn').click()
    var recordToRemain = cy.get('[data-id]').eq(0).find('.information > .list_information > :nth-child(1) > a')
    var recordToDelete = cy.get('[data-id]').eq(1).find('.information > .list_information > :nth-child(1) > a')
    cy.get('[data-id]').eq(1).find('button[title="Manage Record"]').click()
    cy.get('[data-id]').eq(1).find('a[class="deleteDialog"]').click()
    cy.get('.ui-dialog-buttonset > :nth-child(1)').click()
    

    })
