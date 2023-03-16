import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I navigate to notification message',()=>{
  cy.visit('http://the-internet.herokuapp.com/')
})
When('I click on Notification Message and it should open notification message page.',()=>{
   cy.get('#content > ul > li:nth-child(35) > a').click()


})
   Then('Get the notification message available on the page',()=>{
    cy.wait(3000)
   cy.get('#flash').should('contain','Action successful')


 })

