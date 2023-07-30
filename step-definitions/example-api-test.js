const { Given, When, Then } = require("@cucumber/cucumber");
const axios = require("axios");
const chai = require("chai");
const expect = chai.expect;

let baseUrl;
let response;

Given("I have endpoint {string} available for test", async function (appUrl) {
  baseUrl = appUrl;
});

When("I hit get request for {string}", async function (userName) {
  response = await axios.get(`${baseUrl}?name=${userName}`);
  console.log(response.data);
});

Then(
  "I verify the response status {int} and {string} is valid",
  function (statusCode, userName) {
    expect(response.data).to.have.property("name");
    expect(response.data).to.have.property("age");
    expect(response.data.name).to.be.equals(userName);
    expect(response.status).to.be.equals(statusCode);
  }
);
