'use strict';

let c = require('./calculator.js');


console.log("Test"+c.getNum(1));


function CalculatorSteps(){

    this.Given(/^I have numbers (\d+) and (\d+)$/, function (arg1, arg2, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });

    this.When(/^I perform "([^"]*)" operation$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });

    this.Then(/^I should get (\d+) as result$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });
}

module.exports = CalculatorSteps;