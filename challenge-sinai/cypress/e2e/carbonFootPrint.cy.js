import Login from 'C:/Users/Isabela/Desktop/Testing Sinai/challenge-sinai/cypress/support/pages/Carbon/index';
import HomeEnergy from 'C:/Users/Isabela/Desktop/Testing Sinai/challenge-sinai/cypress/support/pages/Carbon/homeEnergy.js';


describe('It should to acess the EPA page and start to calculate the footprint of carbon', () => {

    before(() =>  {
        cy.visit('https://www3.epa.gov/carbon-footprint-calculator/');
        cy.url().should('be.equal', 'https://www3.epa.gov/carbon-footprint-calculator/');
    });

    it('Include the number of people in household and the ZIP code', () => {
        cy.get('[id=ppl-in-household-input]').type('10');
        cy.get('[id=zip-code-input]').type('45896');
        cy.get('[id=get-started]').click();
        cy.contains('Home Energy');
     //   login.numberOfPeopleHousehold('10');
     //   login.insertZipCode('45896');
     //   login.clickButtonGetStarted();
    });

    it('Fill out the home energy data', () => {
        cy.wait(500);
        cy.get('[id=primaryHeatingSource]').select('Electricity')
        cy.get('[id=naturalGasTextInput]').type('50');
        cy.get('[id=electricityTextInput]').type('60');
        cy.get('[id=electricityGreenTextInput]').type('30');
        cy.get('[id=fuelTextInput]').type('20');
        cy.get('[id=propaneTextInput]').type('70');
        cy.get('[id=energyAC]').type('0');
        cy.get('[id=energyHeat]').type('11');
        cy.get('[id=lightsToReplace]').type('66');
        cy.get('[id=pwrMgmtSelect]').select('Already Done');
        cy.get('[id=increaseGreenInput]').type('33');
        cy.get('[id=coldWaterSelect]').select('Will Do');
        cy.get('[id=loadsPerWeek]').type('77');
        cy.get('[id=AirDrySelect]').select('Will Not Do');
        cy.get('[id=to-transportation]').click();
        cy.contains('Transportation');
     //   login.numberOfPeopleHousehold('10');
     //   login.insertZipCode('45896');
     //   login.clickButtonGetStarted();
    });

    it('Fill out the Transportation data', () => {
        cy.wait(500);
        cy.get('[id=maintCurrentSelect]').select('Already Done')
        cy.get('[id=vehicle1Miles]').type('50');
        cy.get('[id=reduceMilesSelect1]').select('Per Year');
        cy.get('[id=vehicle1GasMileage]').type('60');
        cy.get('[id=reduceMilesInput1]').type('20');
        cy.get('[id=reduceMilesSelect1]').select('Per Week');
        cy.get('[id=replaceVehicleInput1]').type('0');
        cy.get('[id=to-waste]').click();
        cy.contains('Waste');
    });

    it('Fill out the Waste data', () => {
        cy.wait(500);
        cy.get('[id=aluminumCheckbox]').click()
        cy.get('[id=glassCheckbox]').click();
        cy.get('[id=newspaperCheckboxR]').click();
        cy.get('[id=to-report]').click();
        cy.contains('Your Household Carbon Footprint Report');
    });
});