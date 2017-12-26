//business logic
var countedNumbers = [];

var countNumber = function(Number) {

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
