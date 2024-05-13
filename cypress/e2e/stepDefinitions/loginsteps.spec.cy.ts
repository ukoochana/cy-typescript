import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-each'
import LoginPage from '../pages/loginPage.cy'

Given(/^I am on the swaglabs app$/, () => {
	cy.visit('/index.html')
});

When(/^I input the username as "([^"]*)"$/, (username) => {
	LoginPage.enterUserName(username);
});

When(/^I input password as "([^"]*)"$/, (password) => {
	LoginPage.enterPassword(password);
});

When(/^I click on login button$/, () => {
	LoginPage.clickOnSauceLabLogin()
});

Then(/^I am logged into the swaglabs app$/, () => {
	cy.contains("Products")
});

Then(/^I should see the following workItems$/, (dataTable) => {
	dataTable.hashes().forEach((row: { workItems: string | number | RegExp; }) => {
		cy.contains(row.workItems).should('exist').should('contain', row.workItems)
	});
});
