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
}

// var countNumber = function(number) {
//
// };
//front end logic
$(document).ready(function() {
  $("form#blank").submit(function() {
    event.preventDefault();
    var number = $("input#number").val();
		if (number <= 0){
			countedNumbers.push(number);
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
