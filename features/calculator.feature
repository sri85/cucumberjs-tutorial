Feature: As a user I should be able to add two number

Scenario: Ability to add two numbers
  Given I have numbers 2 and 3
  When I perform "add" operation
  Then I should get 5 as result