const username= "#user-name";
const password= "#password";
const loginBtn= "#login-button";
const loginError= "h3[data-test='error']";
const menu= "div.bm-burger-button";

class LoginPage{

    static async enterUserName(name){
        cy.typeText(username,name)
    }

    static enterPassword(pswd){
        cy.typeText(password,pswd)
    }

    static clickOnSauceLabLogin(){
        cy.clickElement(loginBtn)
    }
    
}

export default LoginPage
