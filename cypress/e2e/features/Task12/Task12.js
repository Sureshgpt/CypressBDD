import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I navigate the multiple windows',()=>{
    cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("#content > div > a").invoke('removeAttr','target').click()

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')


        //operation to go to parent tab
        cy.go("back");
    
    
})
When('I click on the multiple windows',()=>{

    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get("div[class='example']>a").then((e)=>{

    let url=e.prop("href");
    cy.visit(url);

    })
    cy.url().should('include','https://the-internet.herokuapp.com/windows')
    cy.wait(5000)
    cy.go('back');

    
    
})
    

Then('I should be able to handle the windows',()=>{
    
})
