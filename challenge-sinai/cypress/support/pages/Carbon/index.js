// in the class we include the actions of our pages

const el = require('./elements').ELEMENTS;

class Login {
    accessEPAPage() {
        cy.visit('https://www3.epa.gov/carbon-footprint-calculator/');
    }

    clicktoEnter() {
        cy.get(el.enterButton).click();
    }

    inserttheEmail() {
        cy.get(el.email).type('qa-automation@zenklub.com');
    }

    insertThePassword() {
        cy.get(el.password).type('qachallenge');
    }

    clickToDoTheLogin() {
        cy.get(el.loginButton).click();
    }

    wait() {
        cy.wait(5000);
    }
}

export default new Login();