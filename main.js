"use strict";
exports.__esModule = true;
exports.NumbersManipulations = exports.StringManipulations = void 0;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word[Math.floor(Math.random() * word.length)]);
        console.log(word + ' ' + "Manipulations");
        console.log(word.slice(0, 5));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence.split('').join(' '));
    };
    StringManipulations.prototype.findVowel = function (str) {
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        var vowels_count = 0;
        for (var i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                vowels_count++;
            }
        }
        console.log(vowels_count);
    };
    return StringManipulations;
}());
exports.StringManipulations = StringManipulations;
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                console.log("Not a prime number");
                return;
            }
        }
        console.log("Prime number");
        return;
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        var sum = 0;
        while (num.toString().length > 1) {
            while (num) {
                sum += num % 10;
                num = Math.trunc(num / 10);
            }
            num = sum;
            sum = 0;
        }
        if (num == 1) {
            console.log("Magic number");
        }
        else {
            console.log("Not a magic number");
        }
    };
    return NumbersManipulations;
}());
exports.NumbersManipulations = NumbersManipulations;
var str = "String";
var stringManipulation = new StringManipulations();
stringManipulation.print(str);
stringManipulation.printWithSpace(str);
stringManipulation.findVowel(str);
var n = 17;
var NumbersManipulation = new NumbersManipulations();
NumbersManipulation.findPrime(n);
NumbersManipulation.findMagic(n);
