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

function checkForWinner(){
  //NaN === NaN is always false
  if (positions[0] === positions[1] &&
      positions[1] === positions[2] &&
      positions[2] === positions[3] &&
      positions[3] === positions[4] ||

      positions[4] === positions[5] &&
      positions[5] === positions[6] &&
      positions[6] === positions[7] &&
      positions[7] === positions[8] ||

      positions[8] === positions[9] &&
      positions[9] === positions[10] &&
      positions[10] === positions[11] &&
      positions[11] === positions[12] ||

      positions[12] === positions[13] &&
      positions[13] === positions[14] &&
      positions[14] === positions[15]
      )
    {
    console.log('winner?!');
    }
}

//getWinner = function(move){
  //var result = false;

  //result = true;
  //}
  //return result;
//};

//set div's to empty
//document.getElementById().innerText = "";

//Get player order
  //Player 1 first
  //Player 2 second

//if the first player clicks then append an X
  //Change the state of that div to filled
  //Assign number to player 1

//if the seconds player clicks on a div then append a O
  //Change the state of that div to filled
  //Assign number to player 2

