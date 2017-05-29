'use strict';



let Calculator = function (){


    this.compareNum = function(num1, num2) {

        return (typeof(Number(num1)) === 'number' && typeof(Number(num2)) === 'number');

    };

    this.add = function(num1,num2){
        this.res = num1+num2;
        return this.res;

    };

    this.subtract = function(num1,num2) {

        this.res = num1-num2;
        return this.res;
    };
    
    this.multiply = function(num1,num2) {
        this.res = num1*num2;
        return this.res;
    };

    this.division = function(num1,num2) {
        this.res = num1/num2;
        return this.res;

    };
    this.result = function() {

        return this.res;
    }

};

module.exports = new Calculator();

