import Carbon from '.';

const el = require('./elements').ELEMENTS;

class HomeEnergy {
    numberOfPeopleHousehold() {
        cy.get(el.numberOfPeopleHousehold).click();
    }

    insertZipCode() {
        cy.get(el.zipCode).click();
    }

    clickButtonGetStarted() {
        cy.get(el.buttonGetStarted).click();
    }
}

export default new HomeEnergy();