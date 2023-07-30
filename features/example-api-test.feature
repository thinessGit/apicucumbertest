Feature: Example Api/Service testing in Cucumber

    Scenario Outline: Hit any get http rest api and validate it
        Given I have endpoint "<baseUrl>" available for test
        When I hit get request for "<userName>"
        Then I verify the response status 200 and "<userName>" is valid

        Examples:
            | baseUrl               | userName |
            | https://api.agify.io/ | Babu     |