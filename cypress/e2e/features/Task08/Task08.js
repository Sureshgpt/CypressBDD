import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I navigate the frame',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
    cy.contains("Frames").click()
    
    
})
When('I click on the frame',()=>{
    cy.contains("Nested Frames").click()
    cy.contains("LEFT").then(dd=>{
        const ddText =dd.text()
        cy.log(ddText)
        }) 
    
})

Then('I should be able to handle the frame',()=>{   
     })