import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I open website',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click on AB link',()=>{
    cy.get('#content > ul > li:nth-child(1) > a').click()
})
Then('I should be in AB test page',()=>{
    cy.get('#content > div > p').should('contain',"Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).")
})