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

    var redWinner = "Red wins!";
    var blueWinner = "Blue wins!";

    //if (currentPlayer == playerRed) {
      for(i = 0; i < winConditions.length; i++){
        var winBlock = "";
        for(var o = 0; o < winConditions[i].length; o++){
          var positionIndex = winConditions[i][o];
          winBlock += positions[positionIndex];
        }
        if(winBlock.length == 12){
          console.log(redWinner);
        }else if(winBlock.length === 16){
          console.log(blueWinner);
        }
      }
    //}

    // var realPosition = positionNumber + 1;
    var realPosition = positionNumber;


    $('#board .square:eq(' + positionNumber + ')').addClass(currentPlayer);

    setNextTurn();
  });

});
