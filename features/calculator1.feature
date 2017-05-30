Feature: As a user I should be able to perform arithmetic operations using calculator

  Scenario: Ability to use multiple operators
    Given I have numbers 4 and 2
    And I perform "multiply" operation
    When I "add" 2 to the result
    Then I should get 10 as result