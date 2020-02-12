Feature: MensajeAmigable

  Hello world app

  Scenario: Go to app and say a greeting
    Given I go to webpage 
    Then should see 'Buenas tardes'
    #node_modules\.bin\cucumber-js