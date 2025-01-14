module.exports = {
    default: {
      require: ['src/steps/**/*.ts', 'src/support/hooks.ts'],
      format: ['progress', 'json:reports/cucumber_report.json'],
      paths: ['src/features/**/*.feature'],
      requireModule: ['ts-node/register'],
      timeout: 600000, // Set a higher timeout (e.g., 20 seconds)
    },
  };
  