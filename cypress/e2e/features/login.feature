Feature: Login Page

    Feature Description

    Scenario: login to some random application of saucedemo
        Given I am on the swaglabs app
        When I input the username as "standard_user"
        And I input password as "secret_sauce"
        And I click on login button
        Then I am logged into the swaglabs app

    Scenario Outline: Login with different users
        Given I am on the swaglabs app
        When I input the username as "<username>"
        And I input password as "<password>"
        And I click on login button
        Then I am logged into the swaglabs app

        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | problem_user            | secret_sauce |

