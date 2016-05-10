$(function() {

//Player vars
var moves = 0;
var playerRed = 'red';
var playerBlue = 'blue';
var EMPTY = ' ';
var clickNum = 0;

var positions = [
  EMPTY, EMPTY, EMPTY, EMPTY,
  EMPTY, EMPTY, EMPTY, EMPTY,
  EMPTY, EMPTY, EMPTY, EMPTY,
  EMPTY, EMPTY, EMPTY, EMPTY
];

function setNextTurn(){
  if (currentPlayer === playerRed) {
    currentPlayer = playerBlue;
  }
  else {
    currentPlayer = playerRed;
  }
  $('#messages').text(currentPlayer);
}

function checkValidMove(i){
  if (positions[i] == EMPTY) {
    return true;
  }
  else {
    $('#messages').text("That's not a space.");
    return false;
  }

}

var makeMove = function  ($square, i) {
  board[i] = currentPlayer;
  $square.html(currentPlayer);
  moves++;
};


var squaresEqual = function (i){

};

//update player click
$(document).on('click', '#board .square', function(i) {
  var positionNumber = $(i.currentTarget).index();
  positions[positionNumber]  = currentPlayer;
  moves++;

  if (currentPlayer == playerRed) {
    //TODO
    //add to red players' click
    //make the square that was clicked, unclickable again.
    console.log("red player!");

    } else if (currentPlayer == playerBlue){
      //TODO
      //add to blue players' click
      //make the square that was clicked, unclickable again.
      console.log("blue player!");

    } else {
      console.log("broken");
    }

  var realPosition = positionNumber + 1;
  console.log('You clicked on ' + realPosition);

  //Stop clicks when full
    //keep a tally of how many times blue and red have clicked
    if (clickNum <= 17){
      console.log("Game over");
      //TODO
      //kill the game
    }

  console.log(clickNum);
  //If 16 blocks have been clicked, don't let anymore player clicks
  if (moves == 16) {
    console.log("done!");
  }

  $('#board .square:eq(' + positionNumber + ')').addClass(currentPlayer);

  checkForWinner();
  setNextTurn();
});

$(document).on('gameWin', function (winner) {
  //Alert Winner
});
setNextTurn();
});
