module.exports = {
  default: {
    parallel: 1,
    retry: 0,
    format: [
      "html:./reports/cucumber_report.html",
      "json:./reports/cucumber_report.json",
    ],
    require: ["./step-definitions/*.js", "./util/*.js"],
    paths: ["features/*"],
  },
};

// paths: ["features/*"],  ==>> all feature run
// paths: ["features/fetch-api-post-test.feature"], ==>> single feature run
