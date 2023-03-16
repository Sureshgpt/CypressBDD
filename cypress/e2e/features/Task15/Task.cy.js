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

//Second Task--Add/Remove element
Given('Add Remove Element',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click on Add Remove Element',()=>{
    cy.get("a[href='/add_remove_elements/']").click()
    
})
When('I click on Add option',()=>{
    cy.get("button[onclick='addElement()']").click()

})
When('I click on delete option',()=>{
    cy.get("button[class='added-manually']").click()

})

Then('Elements should be present and remove',()=>{
    cy.get("button[onclick='addElement()']").should('contain','Add Element')
})


//Task 03---Validate Basic auth with authenticate
Given('I navigate to Basic Auth',()=>{
    cy.visit('http://the-internet.herokuapp.com/basic_auth', {auth:{ username:'admin',
                                                              password:'admin'

 } })


    })

When('alert is coming as per authentication',()=>{
    cy.get("div[class='example'] p").should('contain','Congratulations')
 
 })