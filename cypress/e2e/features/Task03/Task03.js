import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })


Given('I navigate to Basic Auth',()=>{
    cy.visit('http://the-internet.herokuapp.com/basic_auth', {auth:{ username:'admin',
                                                              password:'admin'

 } })


    })

When('alert is coming as per authentication',()=>{
    cy.get("div[class='example'] p").should('contain','Congratulations')
 
 })

