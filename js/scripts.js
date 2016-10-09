//business logic
var printNumber = 0;
var countedNumbers = [];

var countNumber = function(number) {
  for (var index = 1; index <= number; index += 1) {
      printNumber +=1;
      countedNumbers.push(printNumber);
    }
};

//front end logic
$(document).ready(function() {
  $("form#blank").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    console.log(number)
    if (isNaN(number) === true) {
      $("#not").text("please enter a number");
    };
    countNumber(number);
    console.log(countedNumbers);
  });
});
