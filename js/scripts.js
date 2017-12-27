//business logic
var countedNumbers = [];

var countNumber = function(number) {
	for (var i = 1; i <= number; i++){
		if (i % 15 === 0){
			countedNumbers.push("ping-pong");
		} else {
			countedNumbers.push(i);
		}
	}

};
//front end logic
$(document).ready(function() {
  $("form#blank").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());
		console.log(number);
    if (isNaN(number) === true) {
      $("#not").text("please enter a number");
    };

    countNumber(number);
		console.log(countedNumbers);

    countedNumbers.forEach(function(number) {
      $("#output").append("<li>" + number + "kittens" + "</li>");
    });
  });
});
