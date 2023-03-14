import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })


Given('I navigate to Horizontal slider page',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click the Horizontal Slider it shoul open Horizontal Slider Page',()=>{
    cy.get('#content > ul > li:nth-child(24) > a').click()
    cy.get('#content > div > h4').should('contain',"Set the focus on the slider (by clicking on it) and use the arrow keys to move it right and left. Or click and drag the slider with your mouse. It will indicate the value of the slider to the right.")
    

    
})
 Then('I should move the slider till value 3.5',()=>{

    cy.get('input[type="range"]').invoke('val','3.5').trigger('input')
    cy.wait(1000)
    cy.get('#range').should('have.text',"3.5").should('be.visible')
   
      })