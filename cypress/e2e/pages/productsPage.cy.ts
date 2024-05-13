const shoppingCart = "div[id='shopping_cart_container']";
const checkout = "a.btn_action.checkout_button";
const firstName = "input[id='first-name']";
const lastName = "input[id='last-name']";
const postalCode = "input[id='postal-code']";
const submit = "input[type='submit']";
const finish = "a.btn_action.cart_button";
const orderConfirmation = "#checkout_complete_container";

class ProductsPage {

    static orderItem(option) {
        switch (option) {
            case "Sauce Labs Bike Light":
                cy.contains("Sauce Labs Bike Light").click();
                break;
            case "Test.allTheThings() T-Shirt (Red)":
                cy.contains("Test.allTheThings() T-Shirt (Red)").click();
                break;
            case "Sauce Labs Onesie":
                cy.contains("Sauce Labs Onesie").click();
                break;
            case "Sauce Labs Fleece Jacket":
                cy.contains("Sauce Labs Fleece Jacket").click();
                break;
            case "Sauce Labs Bolt T-Shirt":
                cy.contains("Sauce Labs Bolt T-Shirt").click();
                break;
            case "Sauce Labs Backpack":
                cy.contains("Sauce Labs Backpack").click();
                break;
        }
    }

    static completeThePurchase(item) {
        this.orderItem(item)
        cy.clickElement(shoppingCart);
        cy.clickElement(checkout)
        cy.typeText(firstName, "test")
        cy.typeText(lastName, "automation")
        cy.typeText(postalCode, "AB1 4CD")
        cy.clickElement(submit)
        cy.clickElement(finish)

    }

}

export default ProductsPage
