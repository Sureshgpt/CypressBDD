import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('Add Remove Element',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click on Add Remove Element',()=>{
    cy.get("a[href='/add_remove_elements/']").click()
    
})
When('I click on Add option',()=>{
    cy.get("button[onclick='addElement()']").click()

})
When('I click on delete option',()=>{
    cy.get("button[class='added-manually']").click()

})

Then('Elements should be present and remove',()=>{
    cy.get("button[onclick='addElement()']").should('contain','Add Element')
})
