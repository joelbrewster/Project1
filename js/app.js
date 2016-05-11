$(function() {
  //Load the modal rules window on page load
  window.onload = function () {
    document.getElementById('button').onclick = function () {
      document.getElementById('rule-modal').style.display = "none";
    };
  };
  //Player
  var moves = 0;
  var playerRed = 'red';
  var playerBlue = 'blue';
  var currentPlayer = playerRed;
  var winner = null;

  //Board
  var EMPTY = '';
  var clickNum = 0;
  var winBlockRed;
  var winBlockBlue;

  //Create an empty 'board' where players can click
  var positions = [
    EMPTY, EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY, EMPTY
  ];

  //Store all the winning combinations a player can use
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

  //When a player wins
  //When all squares are full
  function stopUpdatingBoard(){
    //Stop click listener
    $(document).off('click', '#board .square');
  }

  function checkForTie(){
    var isTie = true;
    n = positions.length;
    for (var i = 0; i < n; i++){
      if(positions[i] == EMPTY){
        isTie = false;
        break;
      }
    }
    return isTie;

  }
  function setNextTurn(){
    if (currentPlayer === playerRed) {
      currentPlayer = playerBlue;
    }
    else {
      currentPlayer = playerRed;
    }

    if(!winner){
      $('#messages').text(currentPlayer).append("'s turn");
    }
  }

  function redWins(){
    winBlockRed = [];
    $('#messages').text("Red wins!").css('color','#FA5048');
    stopUpdatingBoard();
    winner = 'Red';
  }

  function blueWins(){
    winBlockBlue = [];
    $('#messages').text("Blue wins!").css('color','#1B75B7');
    stopUpdatingBoard();
    winner = 'Blue';
  }

  $('#restart').on('click', restartGame);
  function restartGame(){


    $('#board .square').removeClass('clicked').removeClass('red').removeClass('blue');
    currentPlayer = playerRed;
    winner = null;

    //TODO
    EMPTY = '';
    positions = [
      EMPTY, EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY, EMPTY
      ];
    }

    $(document).on('click', '#board .square', function(i) {
      var thisSquare = $(this);
      if(!thisSquare.hasClass('clicked')){
        thisSquare.addClass('clicked');
    var positionNumber = $(i.currentTarget).index();
    positions[positionNumber]  = currentPlayer;

    var o;
    var positionIndex;

    var alreadyClicked = [];

    if (currentPlayer == playerRed) {
      n = winConditions.length;
      for(i = 0; i < n; i++){
        winBlockRed = [];
        for( o = 0; o < winConditions[i].length; o++){
            positionIndex = winConditions[i][o];
          winBlockRed.push(positions[positionIndex]);
          alreadyClicked.push(positionIndex[positionIndex]);
        }

        if(winBlockRed[0] === "red" &&
        winBlockRed[1] === "red" &&
        winBlockRed[2] === "red" &&
        winBlockRed[3] === "red") {

          redWins();
          stopUpdatingBoard();
          break;
        }
      }
    }
      if (currentPlayer == playerBlue) {
        n = winConditions.length;
        for(i = 0; i < n; i++){
          winBlockBlue = [];
          for( o = 0; o < winConditions[i].length; o++){
            positionIndex = winConditions[i][o];
            winBlockBlue.push(positions[positionIndex]);
            alreadyClicked.push(positionIndex[positionIndex]);
          }

          if(winBlockBlue[0] === "blue" &&
          winBlockBlue[1] === "blue" &&
          winBlockBlue[2] === "blue" &&
          winBlockBlue[3] === "blue") {

            blueWins();
            stopUpdatingBoard();
            break;
          }
        }
      }
    //update the positions and current player
    $('#board .square:eq(' + positionNumber + ')').addClass(currentPlayer);
    //Check for tie
    if (checkForTie()){

      $('#messages').text("It's a tie!");
      } else {
      setNextTurn();
      }
    }
  });
});
