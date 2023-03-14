import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

//1)java Script alert: it will have some text and an 'Ok' button
Given('I navigate the JavaScript alert',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('Window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')

           
       })
       cy.get("#result").should('have.text','You successfully clicked an alert')

        

})

//2)javaScript confirm alert: it will have some text with OK and cancel
When('I click on the Jsalert1',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('Window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')

            
       })
    
})

When('I click on the Jsalert2',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
    cy.window().then((win)=>{
    cy.stub(win,'prompt').returns('welcome');
    })

  cy.get("button[onclick='jsPrompt()']").click()

  //cy.on('window:confirm',()=>false)  //cypress closed window by using cancel button

  cy.get("#result").should('have.text','You entered: welcome')

  }) 


Then('I should be able to handle to all the alert',()=>{
    
})
