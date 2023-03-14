import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I navigate the dropdowns',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click on the dropdowns',()=>{
    cy.contains("Dropdown").click()
    // cy.get("#dropdown").type("Option 1").type('{enter}');
    cy.get("#dropdown").find('option').then(dd=>{
        const ddText =dd.text()
        console.log(ddText)
        }) 
    
})

Then('I should be able to get the all option from the dropdowns',()=>{   
    cy.contains("Dropdown").click()
    cy.get('select#dropdown option').eq(1).should('contain','Option 1')
    cy.get('select#dropdown option').last().should('contain','Option 2')
 })

