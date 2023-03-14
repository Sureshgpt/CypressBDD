import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I navigate to JQuery UI Menus',()=>{
 cy.visit('http://the-internet.herokuapp.com/')
})
When('I click on JQuery UI Menus option',()=>{
 cy.get(':nth-child(28) > a').click()
 cy.wait(2000)
 cy.get('#content > div > h3').should('contain',"JQueryUI - Menu")



})
Then('I should select downloads and click on the excel',()=>{
cy.get('#ui-id-2').invoke('show').click()
cy.wait(1000)
cy.get('#ui-id-4').invoke('show').click()
cy.wait(5000)
cy.get('#ui-id-8').contains('Excel').click()
cy.readFile('cypress/downloads/excel.xlsx','binary').should('exist')
 })

