Feature: Login functionality
  As a user
  I want to test the login functionality
  So that I can verify successful and unsuccessful login attempts

  Scenario: Login with valid credentials
    Given I am on the login page
    When I enter a valid username and password
    And I click the login button
    Then I should see a message "You logged into a secure area!"

  Scenario: Login with invalid credentials
    Given I am on the login page
    When I enter an invalid username or password
    And I click the login button
    Then I should see an error message "Your username is invalid!"

  Scenario: Login with empty credentials
    Given I am on the login page
    When I leave both fields empty
    And I click the login button
    Then I should see an error message "Your username is invalid!"
