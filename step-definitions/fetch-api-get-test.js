const { Given, When, Then } = require("@cucumber/cucumber");
const chai = require("chai");
const expect = chai.expect;
const endpoint = require("../api-config/endpoint.json");

let baseUrl;
let response;

Given(
  "I have endpoint {string} available for test using fetch",
  function (appUrl) {
    baseUrl = endpoint[appUrl];

    console.log(`\n${baseUrl}\n`);
  }
);

When("I hit get request using fetch", async function () {
  await fetch(baseUrl)
    .then((res) => {
      response = res;
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});

Then("I verify the response status {int}", function (statusCode) {
  expect(response.status).equals(statusCode);
});
