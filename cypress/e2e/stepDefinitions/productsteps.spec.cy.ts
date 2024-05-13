import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../pages/productsPage.cy"
const listOfProducts = ["Test.allTheThings() T-Shirt (Red)",
    "Sauce Labs Onesie",
    "Sauce Labs Fleece Jacket",
    "Sauce Labs Bolt T-Shirt",
    "Sauce Labs Bike Light",
    "Sauce Labs Backpack"];
const priceOfProducts = ["$29.99", "$9.99", "$15.99", "$49.99", "$7.99", "$15.99"];

Then(/^I am seen six products with full details$/, () => {
    cy.fixture("locators").then((locators) => {
        cy.get(locators.productLocator.productList).invoke('text').then((text) => {
            expect(text).to.include(`${listOfProducts[5]}carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.${priceOfProducts[0]}ADD TO CART`)
            expect(text).to.include(`${listOfProducts[4]}A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.${priceOfProducts[1]}ADD TO CART`)
            expect(text).to.include(`${listOfProducts[3]}Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.${priceOfProducts[2]}ADD TO CART`)
            expect(text).to.include(`${listOfProducts[2]}It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.${priceOfProducts[3]}ADD TO CART`)
            expect(text).to.include(`${listOfProducts[1]}Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.${priceOfProducts[4]}ADD TO CART`)
            expect(text).to.include(`${listOfProducts[0]}This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.${priceOfProducts[5]}ADD TO CART`)
        })
    });
});


When(/^I Purchase one item$/, () => {
    ProductsPage.completeThePurchase(listOfProducts[4]);
});

Then(/^I should be able to complete the Purchase$/, () => {
    cy.fixture("locators").then((locators) => {
        cy.get(locators.productLocator.orderConfirmation).invoke('text').then((text) => {
            expect(text).to.contain("THANK YOU FOR YOUR ORDER");
        })
    });
});

