const { Given, When, Then } = require("@cucumber/cucumber");

Given("I have endpoint url available for test", function () {
  console.log("cucumber Given statement");
});

When("I hit get request", function () {
  console.log("cucumber When statement");
});

Then("I verify the response", function () {
  console.log("cucumber Then statement");
});
