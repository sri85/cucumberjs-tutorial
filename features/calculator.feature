Feature: As a user I should be able to perform arithmetic operations using calculator

Scenario: Ability to add two numbers
  Given I have numbers 2 and 3
  When I perform "add" operation
  Then I should get 5 as result

Scenario: Ability to subtract two numbers
    Given I have numbers 4 and 2
    When I perform "subtract" operation
    Then I should get 2 as result

Scenario: Ability to multiply two numbers
    Given I have numbers 4 and 2
    When I perform "multiply" operation
    Then I should get 8 as result

Scenario: Ability to divide two numbers
    Given I have numbers 4 and 2
    When I perform "division" operation
    Then I should get 2 as result


