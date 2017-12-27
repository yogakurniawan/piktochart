Feature: Piktochart feature
  As a user of Piktochart
  I should be able to use different commands
  to get informations about elements on the page

  Scenario: Get title of website
    Given I go on the website "http://localhost:8000/"
    Then should the title of the page be "PiktoChart Front End Test"

  Scenario: Add image to canvas
    Given I click first image on the image list
    Then Clicked image should be available in canvas