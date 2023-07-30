Feature: Sample Api/Service testing 

Scenario: Hit any get httpp rest api and validate it 
Given I have endpoint url available for test 
When I hit get request
Then I verify the response  