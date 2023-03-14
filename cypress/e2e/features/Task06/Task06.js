import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I navigate the checkboxes',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})

When('I click on the checkbox',()=>{
    cy.contains('Checkboxes').click()
})

Then('I should be able to check the all the checkboxes',()=>{
cy.wait(3000)

    cy.get("[type='checkbox']").first().should('not.be.checked').check({force:true}).should('be.checked')
})
