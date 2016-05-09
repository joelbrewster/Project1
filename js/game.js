//How many wins
var player1Wins = 0;
var player2Wins = 0;

//Total num of wins
var player1Total = 0;
var player2Total = 0;

//winnerNumbers = [15, 240, 3840, 61440, 4369, 8738, 17476, 34948];

var positions = [
  NaN, NaN, NaN, NaN,
  NaN, NaN, NaN, NaN,
  NaN, NaN, NaN, NaN
];

var player1 = 'X';
var player2 = 'O';

function setNextTurn(){
  if (currentPlayer === player1) {
    currentPlayer = player2;
  }
  else {
    currentPlayer = player1;
  }
  //update text
}



getWinner = function(move){
  var result = false;

  result = true;
  }
  return result;
};

//set div's to empty
document.getElementById().innerText = "";

//Get player order
  //Player 1 first
  //Player 2 second

//if the first player clicks then append an X
  //Change the state of that div to filled
  //Assign number to player 1

//if the seconds player clicks on a div then append a O
  //Change the state of that div to filled
  //Assign number to player 2

