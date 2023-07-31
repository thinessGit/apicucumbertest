const { Given, When, Then } = require("@cucumber/cucumber");
const chai = require("chai");
const expect = chai.expect;
const endpoint = require("../api-config/endpoint.json");
const requestBody = require("../api-config/api-request.json");

let baseUrl;
let response;
let apiRequestBody;

Given(
  "I have endpoint and request body {string} available for test",
  function (appUrl) {
    baseUrl = endpoint[appUrl];
    apiRequestBody = { ...requestBody[appUrl] };
  }
);

When("I hit post request using fetch", async function () {
  apiRequestBody.name = "Thiess Babu";
  apiRequestBody.job = "Test Automation Architect";

  await fetch(baseUrl, {
    method: "POST",
    body: { ...apiRequestBody },
  })
    .then((res) => {
      response = res;
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});

Then(
  "I verify the response status {int} for post request",
  function (statusCode) {
    expect(response.status).equals(statusCode);
  }
);
