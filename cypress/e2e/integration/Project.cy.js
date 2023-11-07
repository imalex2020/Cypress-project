/// <reference types="cypress" />

describe('Project - Form Elements', () => {

    it('Test Case 01  Validate the Contact Us information', () => {
        cy.visit("https://techglobal-training.com/frontend");
        cy.get(".cards").contains("Project - Form Elements").click();
        const ConInfo = ['2860 S River Rd Suite 480, Des Plaines, IL 60018', 'info@techglobalschool.com', '(773) 257-3010']
        cy.get(".is-size-3").contains("Contact Us").nextAll().as('info')

        cy.get('@info').each(($el, index) => {
            expect($el.text()).to.equal(ConInfo[index])
            expect($el).to.be.visible
        })

    })

    it('Test Case 02 Validate the Full name input box', () => {
        cy.visit("https://techglobal-training.com/frontend");
        cy.get(".cards").contains("Project - Form Elements").click();

        cy.get('label').contains("Full name").should('have.text', 'Full name *')
            .next().find("input")
            .should('be.visible')
            .and('have.attr', 'placeholder', 'Enter your full name')

        cy.get('label').contains("Full name").next().find("input").should('have.attr', 'required')

    })

    it('Test Case 03 Validate the Gender radio button', () => {
        cy.visit("https://techglobal-training.com/frontend");
        cy.get(".cards").contains("Project - Form Elements").click();

        const arr = ['Male', 'Female', 'Prefer not to disclose']
        cy.get('.control > .label').contains('Gender').should('have.text', 'Gender *').next().find('input').should('have.attr', 'required')
        cy.get('.control > .label').contains('Gender').nextAll().as('options')

        cy.get('@options').each(($el, index) => {
            expect($el.text()).to.equal(arr[index])
            cy.wrap($el).find('input').should('be.enabled').and('not.be.checked')
        })
        //const selectedOption = arr[0]
        //cy.get('@options').contains(selectedOption).find('input').click().should('be.checked')
        //cy.get('@options').filter(($el) => $el.text() !== selectedOption).find('input').should('not.be.checked')

        cy.get('@options').contains('Male').find('input').check().should('be.checked').parent().siblings().find('input').should('be.not.checked')
        cy.get('@options').contains('Female').find('input').check().should('be.checked').parent().siblings().find('input').should('be.not.checked')


    })

    const testData = [
        {
            description: 'Validate the Address input box',
            label: 'Address',
            placeholder: 'Enter your address',
            required: false
        },
        {
            description: 'Validate the Email input box',
            label: 'Email *',
            placeholder: 'Enter your email',
            required: true
        },
        {
            description: 'Validate the Phone input box',
            label: 'Phone',
            placeholder: 'Enter your phone number',
            required: false
        },
        {
            description: 'Validate the Message input box',
            label: 'Message',
            placeholder: 'Type your message here...',
            required: false
        }
    ]

    testData.forEach((test, index) => {

        it(`Test Case 0${index + 4} - ${test.description}`, () => {
            cy.visit('https://techglobal-training.com/frontend/project-1')

            cy.contains('.label', test.label).should('have.text', test.label)

            cy.contains('.label', test.label).parent().find('input, textarea').should('be.visible')
                .and('have.attr', 'placeholder', test.placeholder)
                .and(test.required ? 'have.attr' : 'not.have.attr', 'required')
        })
    })


    it('Test case 08 Validate the Consent checkbox', () => {
        cy.visit("https://techglobal-training.com/frontend");
        cy.get(".cards").contains("Project - Form Elements").click();
        cy.get('.checkbox').should('be.visible').should('have.text', ' I give my consent to be contacted.')
            .find('input').should('be.enabled').check().should('be.checked').uncheck().should('be.not.checked')
        cy.get('.checkbox').find('input').should('have.attr', 'required')

    })

    it('Test case 09  Validate the SUBMIT button', () => {
        cy.visit("https://techglobal-training.com/frontend");
        cy.get(".cards").contains("Project - Form Elements").click();
        cy.get('.button.is-link').should('be.visible').should('be.enabled').should('have.text', 'SUBMIT') //works only with 'should' chain


    })

    it('Test case 10 Validate the form submission', () => {
        cy.visit("https://techglobal-training.com/frontend");
        cy.get(".cards").contains("Project - Form Elements").click();

        const information = ['Alex Trach', '2121 Chicago', 'alex@gmail.com', '609 - 999 - 999', 'My message']
        cy.get('.control > input, .textarea').as('infoText')
        cy.get('@infoText').each(($el, index) => {
            cy.wrap($el).type(information[index])
        })
        cy.get('.control > .label').contains('Gender').next().find('input').check()
        cy.get('.checkbox').find('input').check()
        cy.get('.button.is-link').click()

        cy.on("uncaught:exception", () => {
            return false
        })
        cy.get('.mt-5').should('have.text', 'Thanks for submitting!')

    })

}) 