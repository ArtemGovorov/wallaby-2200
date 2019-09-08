module.exports = function() {
  return {
    files: [
      { pattern: 'src/common/environment/environment.ts' },
      "src/**/*.ts"
    ],
    tests: [
      "tests/**/*.spec.ts"
    ],
    testFramework: 'mocha',
    env: {
      type: 'node',
    },
    setup: function(w) {
      const path = require('path');
      const ui = require(path.resolve(process.cwd(), 'src/common/mocha/bdd'));
      w.testFramework.ui(ui);
    }
  }
}