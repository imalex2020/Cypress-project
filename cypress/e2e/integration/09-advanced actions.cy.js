/// <reference types="cypress" />

describe("Keyboard & Mouse Actions", () => {

    it("Keyboard Actions", () => {
        cy.visit("https://techglobal-training.com/frontend");
        cy.clickCard("Html Elements");


        // cy.get('#dropdown-button').trigger('mouseover')
        // cy.get('#dropdown-button').realHover()


        cy.get('#text_input1')
            .realClick()
            .realPress('A')
            .realPress('Tab')
            .realPress('KeyB')
            .realPress('ArrowLeft')
            .realPress('R')
            .realPress('ArrowRight')
            .realPress('Backspace')

    });

    it('Click, Right click and double click', () => {
        cy.visit("https://techglobal-training.com/frontend");
        cy.clickCard("Actions");
        const elements = ["Click on me", "Right-Click on me", "Double-Click on me"]
        cy.get('#click, #right-click, #double-click').each(($el, index) => {
            expect($el.text()).to.equal(elements[index])
            cy.get('#click').realClick()
            cy.get('#click_result').should('have.text', 'You clicked on a button!')
            cy.get('#right-click').rightclick()
            cy.get('#right_click_result').should('have.text', 'You right-clicked on a button!')
            cy.get('#double-click').dblclick()
            cy.get('#double_click_result').should('have.text', 'You double-clicked on a button!')

        })


    })

    it('Drag and Drop', () => {

        const arr = ["Drag Me", "Drop Here"]
        cy.visit("https://techglobal-training.com/frontend");
        cy.clickCard("Actions");
        cy.get('#drop_element, #drag_element').each(($el, index) => {
            expect($el.text()).to.equal(arr[index])
        })
        
            cy.get("#drop_element").drag('#drag_element')
            cy.get('#drag_and_drop_result').should('have.text', 'An element dropped here!')

        
    
})
});