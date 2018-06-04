
//create a function to randomly select the winning number
//create onclick fucntion to start game
//create function to randomize choice values at start of game
//create function to add together selected choices
// check after each key to see if player won
//alert if player wins
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)

    $('#randomNumber').text(Random);
    
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        playerTotal= 0;
        $('#finalTotal').text(playerTotal);
        } 
  
  function youWon(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //addes the losses to the playerTotal
  function youLose(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  // click for jewels
    $('#one').on ('click', function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#finalTotal').text(playerTotal); 
            //win/lose conditions
          if (playerTotal == Random){
            youWon();
          }
          else if ( playerTotal > Random){
            youLose();
          }   
    })  
    $('#two').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#finalTotal').text(playerTotal); 
          if (playerTotal == Random){
            youWon();
          }
          else if ( playerTotal > Random){
            youLose();
          } 
    })  
    $('#three').on ('click', function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $('#finalTotal').text(playerTotal);
  //win/lose conditions
            if (playerTotal == Random){
            youWon();
          }
          else if ( playerTotal > Random){
            youLose();
          } 
    })  
    $('#four').on ('click', function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $('#finalTotal').text(playerTotal); 
        
            if (playerTotal == Random){
            youWon();
          }
          else if ( playerTotal > Random){
            youLose();
          }
    });   
  }); 