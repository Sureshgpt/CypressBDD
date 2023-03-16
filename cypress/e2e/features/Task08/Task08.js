import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I navigate the address of application',()=>{
    cy.visit('http://the-internet.herokuapp.com/')

    
        


        

    
})
When('I click on the frame',()=>{
    cy.get('a[href="/nested_frames"]').click()

    
    
})

Then('I should be able to handle the frame',()=>{ 
    cy.get("frame[src='/frame_top']").within(($frame) => {
        cy.wrap($frame.contents().find('frame[name="frame-left"]')).within((frame) => {
           
            cy.wrap(frame.contents().find('body')).should('contain', 'LEFT')
        })

    })

    
     })