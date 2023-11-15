class LoginPage {

    getUsernameField(){
        return cy.get('#username')
    }

    getPasswordField(){
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get('#login_btn')
    }

    getLogoutButton(){
        return cy.get('#logout')
    }

    getForgotPassword(){
        return cy.get('#login_btn ~')
    }

    getSuccessMessage(){
        return cy.get('#success_lgn')
    }

    getLoginForm(){
        return cy.get('.is-size-3')
    }

    clickLoginButton(){
        this.getLoginButton().click()
    }

    userLogin1(){
        this.getUsernameField()
        this.getPasswordField()
     
     }


    userLogin(username, password){
       this.getUsernameField().type(username)
       this.getPasswordField().type(password)
       this.clickLoginButton()
    }
}


export default LoginPage