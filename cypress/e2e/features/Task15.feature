Feature: Task01
Scenario: Text Validation
Given I open website
When I click on AB link
Then I should be in AB test page


Scenario: Add Remove elements 
Given Add Remove Element
When I click on Add Remove Element
When I click on Add option
When I click on delete option
Then Elements should be present and remove


Scenario: authentication alert
Given I navigate to Basic Auth
When alert is coming as per authentication