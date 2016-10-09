//business logic
var printNumber = 0;
var countedNumbers = [];

var countNumber = function(number) {
  for (var index = 1; index <= number; index += 1) {
      printNumber +=1;
      if (printNumber % 15 === 0){
        countedNumbers.push("ping-pong");
      } else if (printNumber % 5 === 0){
        countedNumbers.push("pong");
      } else if (printNumber % 3 === 0){
        countedNumbers.push("ping");
      } else {
        countedNumbers.push(printNumber);
      }
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

//this little bit works to create alerts, but not sure how to make the replace part happen.
/*    countedNumbers.map(function(number){
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
});*/
