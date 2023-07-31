Feature: Example post Api/Service testing in Cucumber with fetch

    Scenario Outline: Hit any post http rest api and validate it using fetch
        Given I have endpoint and request body "<baseUrl>" available for test
        When I hit post request using fetch
        Then I verify the response status 201 for post request

        Examples:
            | baseUrl      |
            | reqres-users |

