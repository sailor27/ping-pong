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
    countNumber(number);
    console.log(number);
    console.log(printNumber);
    console.log(countedNumbers);
    var newNumbers = countedNumbers.toString();
    console.log(newNumbers);
  //  newNumbers.map(function(number){
  //    replace("number","ping");
  //  }); Nope, bc can't run .replace() on an array


//this little bit works to create alerts, but not sure how to make the replace part happen.
    countedNumbers.map(function(number){
      if (number % 3 === 0){
      newNumbers[3].replace("3", "ping");
      } else if (number % 5 === 0){
        alert ("pong");
      } else if (number % 15 === 0){
        alert ("ping-pong");
      }
    $("#output").text(newNumbers);
    });



  });
});
