// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-time-stats-reporter"),
    ],
    client: {
      jasmine: {
        timeoutInterval: 20000,
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
        random: false,
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    coverageReporter: {
      //   dir: require("path").join(__dirname, "./coverage/rithm"),
      //   subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
      // reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true,
      /*   thresholds: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80,
      },*/
    },
    reporters: ["progress", "kjhtml", "time-stats", "dots"],
    timeStatsReporter: {
      reportTimeStats: true, // Print Time Stats (histogram)

      binSize: 100, // Bin size for histogram (in milliseconds)

      slowThreshold: 500, // The threshold for what is considered a slow test (in milliseconds).
      // This is also the max value for last bin histogram
      // Note that this will automatically be rounded up to be evenly divisible by binSize

      reportSlowestTests: true, // Print top slowest tests

      showSlowTestRankNumber: false, // Displays rank number next to slow tests, e.g. `1) Slow Test`

      longestTestsCount: 10, // Number of top slowest tests to list
      // Set to `Infinity` to show all slow tests. Useful in combination with `reportOnlyBeyondThreshold` as `true`

      reportOnlyBeyondThreshold: false, // Only report tests that are slower than threshold
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    browserConsoleLogOptions: {
      level: "log",
    },
    customLaunchers: {
      ChromeHeadlessCI: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox", "--disable-gpu"],
      },
    },
    singleRun: false,
    restartOnFileChange: true,
    retry: 2,

    reportsSlowerThan: 2,
    captureTimeout: 2 * 60000,
    browserDisconnectTimeout: 210000,
    browserSocketTimeout: 210000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 210000, //by default 10000
  });
};
