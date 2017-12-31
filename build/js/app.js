(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//front end logic
var Calculator = require('./../js/ping-pong.js').calculatorModule;
$(document).ready(function() {
  $("form#blank").submit(function() {
    event.preventDefault();
    var number = $("input#number").val();
		console.log(number);
		if (number <= 0){
			$("#not").text("please enter a number greater than 0 to activate ping-pong");
		};
		var classicCalculator= new Calculator("classic");
		var countedNumbers = classicCalculator.pingPong(number);
		console.log(countedNumbers);
    countedNumbers.forEach(function(number) {
      $("#output").append("<li>" + number + "</li>");
    });
  });
});

},{"./../js/ping-pong.js":2}],2:[function(require,module,exports){
//business logic

function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(number){
	var countedNumbers = [];
	for (var i = 1; i <= number; i++){
		if (i % 15 === 0){
			countedNumbers.push("ping-pong");
		} else if (i % 5 === 0){
			countedNumbers.push("pong");
		} else if (i % 3 === 0){
			countedNumbers.push("ping");
		} else {
			countedNumbers.push(i);
		}
	} //end for loop
	return countedNumbers;
}
exports.calculatorModule = Calculator;

},{}]},{},[1]);
