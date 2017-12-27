//business logic
var countedNumbers = [];

var countNumber = function(number) {
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
	} //end for loop started on 5

};
//front end logic
$(document).ready(function() {
  $("form#blank").submit(function() {
    event.preventDefault();
    var number = $("input#number").val();
		console.log(number);
    if (isNaN(number) === true) {
      $("#not").text("please enter a number u fool");
    };

    countNumber(number);
		console.log(countedNumbers);

    countedNumbers.forEach(function(number) {
      $("#output").append("<li>" + number + "</li>");
    });
  });
});
