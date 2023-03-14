import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I navigate the challenging DOM',()=>{


cy.visit('http://the-internet.herokuapp.com/')

// Click on the challenging DOM
cy.contains('Challenging DOM').click()
cy.get('#canvas').s()
// cy.get('div').find('#canvas').then(image=>{
//    const img= image.text().trim()
//     cy.log(img )
// })
 
    


})
// When('I navigate the challenging DOM',()=>{
 
    
// })

Then('I should be able to see image and dowonload the answer',()=>{



})

