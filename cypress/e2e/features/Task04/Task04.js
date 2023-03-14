import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I navigate the broken Image',()=>{

cy.visit('http://the-internet.herokuapp.com/')

})
When('I click on broken Image',()=>{
 
    cy.get('#content > ul > li:nth-child(4) > a').click()

})

Then('I should be able to see image and count the Image',()=>{

cy.get('img').then((images)=>{
const count=images.length;
 cy.log('there are ${count} images on this page.');

})


})

