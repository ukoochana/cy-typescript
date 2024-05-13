Feature: Create and Update API tests

    Feature Description

    Scenario: Create a user
        When I post a user with requestBody
        Then user is created

    Scenario: Update a user
        When I update a user with "kumarrrrr"
        Then user is updated


