var Mocha = require('mocha');
Suite = require('mocha/lib/suite'),
    Test  = require('mocha/lib/test');

/**
 * A simple UI that only exposes a single function: test
 */
module.exports = Mocha.interfaces['simple-ui'] = function(suite) {
    suite.on('pre-require', function(context, file, mocha) {
        var common = require('mocha/lib/interfaces/common')([suite], context);
        var originalIt = context.it;
        var it = function(){
            return originalIt.apply(this, arguments);
        };
        it.beta = () => {}; // Additional function
        // ... Additional extension methods

        context.it = it;
    });
};