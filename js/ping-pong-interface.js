//front end logic
var Calculator = require('./../js/ping-pong.js').calculatorModule;
$(document).ready(function() {
  $("form#blank").submit(function() {
    event.preventDefault();
    var number = $("input#number").val();
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
