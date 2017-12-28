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
exports.calculatorModule = Calculator;
