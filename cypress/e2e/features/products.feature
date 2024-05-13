Feature: Products Page

    Feature Description

    Background:
        Given I am on the swaglabs app
        When I input the username as "standard_user"
        And I input password as "secret_sauce"
        And I click on login button

    @test
    Scenario: Data Table is being used by this scenario
        Given I am logged into the swaglabs app
        Then I should see the following workItems
            | workItems                         |
            | Sauce Labs Bike Light             |
            | Test.allTheThings() T-Shirt (Red) |
            | Sauce Labs Onesie                 |
            | Sauce Labs Fleece Jacket          |
            | Sauce Labs Bolt T-Shirt           |
            | Sauce Labs Backpack               |


    Scenario: Assert six products
        Given I am logged into the swaglabs app
        Then I am seen six products with full details

    Scenario: Purchase one item
        Given I am logged into the swaglabs app
        When I Purchase one item
        Then I should be able to complete the Purchase
