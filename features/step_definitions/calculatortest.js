'use strict';

let calc = require('../model/calculator.js');
let assert = require('chai').assert;



function CalculatorSteps(){

    this.Given(/^I have numbers (\d+) and (\d+)$/, function (arg1, arg2,callback) {
        this.firstNum = Number(arg1);
        this.secondNum = Number(arg2);

        assert.equal(calc.compareNum(arg1,arg2),true,"Both the arguments are not of type number");
        callback();

    });

    this.When(/^I perform "([^"]*)" operation$/, function (operation, callback) {

       if (operation === 'add'){
           calc.add(this.firstNum,this.secondNum)
       }
       if (operation === 'subtract'){
           calc.subtract(this.firstNum,this.secondNum)
       }
       if (operation === 'multiply'){
            this.res1 =calc.multiply(this.firstNum,this.secondNum)
       }
        if (operation === 'division'){
            calc.division(this.firstNum,this.secondNum)
        }
       callback();
    });

    this.Then(/^I should get (\d+) as result$/, function (arg1, callback) {

        assert.equal(arg1,calc.result());
        callback();
    });

    this.When(/^I "([^"]*)" (\d+) to the result$/, function (arg1, arg2, callback) {

        calc.add(Number(arg2),this.res1);
        callback();
    });
}

module.exports = CalculatorSteps;