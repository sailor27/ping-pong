//business logic
var countedNumbers = [];

var countNumber = function(number) {
  for (var index = 1; index <= number; index += 1) {
      index +=1;
      if (index % 15 === 0){
        countedNumbers.push("ping-pong");
      } else if (index % 5 === 0){
        countedNumbers.push("pong");
      } else if (index % 3 === 0){
        countedNumbers.push("ping");
      } else {
        countedNumbers.push(index);
      }
    }
};
//front end logic
$(document).ready(function() {
  $("form#blank").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());

    if (isNaN(number) === true) {
      $("#not").text("please enter a number");
    };

    countNumber(number);

    countedNumbers.forEach(function(number) {
      $("#output").append("<li>" + number + "</li>");
    });
  });
});
