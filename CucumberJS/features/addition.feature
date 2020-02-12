Feature: Addition

  Addition is great as a verification exercise to get the Cucumber-js infrastructure up and running

  Scenario: Add two number
    Given the numbers 1 and 3
    When they are added together 
    Then should the result be 4

   Scenario: Substract two number
    Given the numbers 3 and 2
    When they are substract together 
    Then should the result be 1

    #node_modules\.bin\cucumber-js