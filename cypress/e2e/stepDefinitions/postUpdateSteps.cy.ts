import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const URL = "https://reqres.in/api/users"
var responseBodyFromPost;
var responseFromUpdate;

When(/^I post a user with requestBody$/, () => {
    cy.fixture("reqBody").then((reqBody) => {
        cy.request({
            method: 'POST',
            url: URL,
            body: reqBody
        }).then((response) => {
            expect(response.status).to.equal(201)
            responseBodyFromPost = response.body;
        });
    });
});

Then(/^user is created$/, () => {
    cy.task('log', responseBodyFromPost)
    expect(responseBodyFromPost.name).to.equal('morpheus')
    expect(responseBodyFromPost.job).to.equal('leader')
});

When(/^I update a user with "([^"]*)"$/, (newName) => {
    cy.request({
        method: 'PUT',
        url: `${URL}/2`,
        body: { data: { "name": newName } }
    }).then((response) => {
        expect(response.status).to.equal(200)
        responseFromUpdate = response.body;
    });
});

Then(/^user is updated$/, () => {
    cy.task('log', responseFromUpdate)
    expect(responseFromUpdate.data.name).to.equal('kumarrrrr')
});

