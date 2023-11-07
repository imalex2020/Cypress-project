/// <reference types="cypress" />

describe("Custom commands", () => {
    it('Parent command', () =>{
        cy.visit("https://techglobal-training.com/frontend");
        cy.clickCard("Html Elements");
       cy.login('Tech', 'Global')
        

    })

    it('Parent command', () =>{
        cy.visit("https://techglobal-training.com/frontend");
        cy.clickCard("Html Elements");
         cy.login('Tech', 'Global')
        
    })

    it('Child command', () =>{
        cy.visit("https://techglobal-training.com/frontend");
       
       
        
    })



})