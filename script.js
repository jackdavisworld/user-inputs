$(function() {
  //All JS goes within these brackets  
  
  $("#number-submit").click(function(){;
    
    //select the box with id of number
    //get the value from that box
    var numberString = $("#number").val();

    //convert string to number
    var number = parseInt(numberString);

    //check if number is less than 1
    if ( number < 1 ) {
      //if number is less than 1, chastise participant
      $("#answer").text("You have reading comprehension issues.");
    } else {
      $("#answer").text("That's right! You have a real talent.");
    }
    
  });


});

