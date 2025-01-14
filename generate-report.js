const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json', // Path to JSON file
  output: 'reports/cucumber_report.html',  // Path to HTML report
  reportSuiteAsScenarios: true,
  launchReport: true,
  screenshotsDirectory: 'reports/screenshots', // Path to screenshots directory
  storeScreenshots: true,                      // Enable screenshot inclusion
};

reporter.generate(options);
