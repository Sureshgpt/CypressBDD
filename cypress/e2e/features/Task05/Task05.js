import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I navigate the challenging DOM option',()=>{


    cy.visit('https://the-internet.herokuapp.com/challenging_dom')
    //locators for button 
    
     })
     When('I click on chalenging DOM then it should be come show value with image',()=>{
     cy.get('div.large-2.columns >.button').not('.alert, .success')
     cy.get('.button').filter('.alert')
     cy.get('.button.success')

 
    
    })

    Then('I should be able to download image which is available',()=>{
            //table row6 data
            cy.contains('Iuvaret5')
            cy.contains('Apeirian5')
            cy.contains('Adipisci5')
            cy.contains('Definiebas5')
            cy.contains('Consequuntur5')
            cy.contains('Phaedrum5')
            cy.get('tbody tr').eq(5).contains('edit')
            cy.get('tbody tr').eq(5).contains('delete')
            cy.get('#canvas')
    
    



})

