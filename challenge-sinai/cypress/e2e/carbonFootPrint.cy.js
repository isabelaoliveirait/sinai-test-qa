import Carbon from 'C:/Users/Isabela/Desktop/Testing Sinai/challenge-sinai/cypress/support/index.js';
import HomeEnergy from 'C:/Users/Isabela/Desktop/Testing Sinai/challenge-sinai/cypress/support/pages/Carbon/homeEnergy.js';


describe('It should to acess the EPA page and start to calculate the footprint of carbon', () => {
    it.only('Access the Zenklub page', () => {
        Carbon.accessEPAPage();

    });

    it('Include the number of people in household and the ZIP code', () => {
        Carbon.numberOfPeopleHousehold('10');
        Carbon.insertZipCode('45896');
        Carbon.clickButtonGetStarted();
    });
});