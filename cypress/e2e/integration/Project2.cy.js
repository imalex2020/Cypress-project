/// <reference types="cypress" />
import LoginPage from "../../pages/Project2";

describe('Project - Login Function', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-2')
    })

    const loginPage = new LoginPage()



    it('Test Case 01 - Validate the login form', () => {
        const arr = ['Please enter your username', 'Please enter your password']

        cy.get("#username, #password").as('input')
        cy.get('@input').each(($el, index) => {
            cy.wrap($el).should('be.visible').and('not.have.attr', 'required')
            cy.wrap($el).siblings().should('have.text', arr[index])
        })

        loginPage.getLoginButton().should('have.text', 'LOGIN').click()
        loginPage.getForgotPassword().should('have.text', 'Forgot Password?').click()

    })

    it('Test Case 02 - Validate the valid login', () => {
        loginPage.userLogin('TechGlobal', 'Test1234')
        loginPage.getSuccessMessage().should('have.text', 'You are logged in')
        loginPage.getLogoutButton().should('have.text', 'LOGOUT')

    })

    it('Test Case 03 - Validate the logout', () => {
        loginPage.userLogin('TechGlobal', 'Test1234')
        loginPage.getLogoutButton().click()
        loginPage.getLoginForm().should('be.visible')

    })

    it('Test Case 04 - Validate the Forgot Password? Link and Reset Password modal', () => {
        loginPage.userLogin('TechGlobal', 'Test1234')
        loginPage.getLogoutButton().click()
        loginPage.getLoginForm().should('be.visible')

    })









})