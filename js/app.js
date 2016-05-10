$(function() {

  //Player vars
  var moves = 0;
  var playerRed = 'red';
  var playerBlue = 'blue';
  var EMPTY = ' ';
  var clickNum = 0;
  var currentPlayer = playerBlue;
  var realPosition;

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
    var messages = $('#messages').text(currentPlayer);
  }
  setNextTurn();

  $(document).on('click', '#board .square', function(i) {
    var positionNumber = $(i.currentTarget).index();
    positions[positionNumber]  = currentPlayer;

    if (currentPlayer == playerRed) {

      var redWinner = "Red wins!";

      //horizontal wins
      if (positionNumber === (0 && 1 && 2 && 3)) {
        console.log(redWinner);
      }
      else if (positionNumber === (4 && 5 && 6 && 7)) {
        console.log(redWinner);
      }
      else if (positionNumber === (8 && 9 && 10 && 11)) {
        console.log(redWinner);
      }
      else if (positionNumber === (12 && 13 && 14 && 15)) {
        console.log(redWinner);
      }
      //vertical wins
      else if (positionNumber === (0 && 4 && 8 && 12)) {
        console.log(redWinner);
      }
      else if (positionNumber === (1 && 5 && 9 && 13)){
        console.log(redWinner);
      }
      else if (positionNumber === (2 && 6 && 10 && 14)) {
        console.log(redWinner);
      }
      else if (positionNumber === (3 && 7 && 11 && 15)) {
        console.log(redWinner);
      }
      //diagonal wins
      else if (positionNumber === (0 && 5 && 10 && 15)) {
        console.log(redWinner);
      }
      else if (positionNumber === (3 && 6 && 9 && 12)) {
        console.log(redWinner);
      }

    } else if (currentPlayer == playerBlue){
      //horizontal wins
      //TODO refactor later

    }

    // var realPosition = positionNumber + 1;
    var realPosition = positionNumber;


    $('#board .square:eq(' + positionNumber + ')').addClass(currentPlayer);

    setNextTurn();
  });

});
