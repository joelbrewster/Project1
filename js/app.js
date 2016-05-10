$(function() {

//Player vars
var moves = 0;
var playerRed = 'red';
var playerBlue = 'blue';
var currentPlayer = playerBlue;
var printWinner;

//Board vars
var EMPTY = '';
var clickNum = 0;
var winBlock;

var positions = [
  EMPTY, EMPTY, EMPTY, EMPTY,
  EMPTY, EMPTY, EMPTY, EMPTY,
  EMPTY, EMPTY, EMPTY, EMPTY,
  EMPTY, EMPTY, EMPTY, EMPTY
];

var winConditions = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],
  [3, 6, 9, 12],
];

//funk
function setNextTurn(){
  if (currentPlayer === playerRed) {
    currentPlayer = playerBlue;
  }
  else {
    currentPlayer = playerRed;
  }
  var messages = $('#messages').text(currentPlayer);
}
setNextTurn();

$(document).on('click', '#board .square', function(i) {
  var positionNumber = $(i.currentTarget).index();
  positions[positionNumber]  = currentPlayer;

  var o;
  var positionIndex;

  if (currentPlayer == playerRed) {
    printWinner = "Red Wins!";
  for(i = 0; i < winConditions.length; i++){
     winBlock = "";
    for( o = 0; o < winConditions[i].length; o++){
      positionIndex = winConditions[i][o];
      winBlock += positions[positionIndex];
    }
    if(winBlock.length == 12){
      console.log(printWinner);
    }
  }

  if (currentPlayer == playerBlue) {
    printWinner = "Blue Wins!";
  for(i = 0; i < winConditions.length; i++){
     winBlock = "";
    for( o = 0; o < winConditions[i].length; o++){
       positionIndex = winConditions[i][o];
      winBlock += positions[positionIndex];
    }if(winBlock.length == 16){
      console.log(printWinner);
      }
    }
  }
}

$('#board .square:eq(' + positionNumber + ')').addClass(currentPlayer);

setNextTurn();
});

});
