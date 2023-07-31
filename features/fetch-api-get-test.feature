Feature: Example Api/Service testing in Cucumber with fetch

    Scenario Outline: Hit any get http rest api and validate it using fetch
        Given I have endpoint "<baseUrl>" available for test using fetch
        When I hit get request using fetch
        Then I verify the response status 200

        Examples:
            | baseUrl  |
            | activity |
            | ip-info  |
            | fact     |
            | joke     |
