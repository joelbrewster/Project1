$(document).ready(function() {
  var positions = [
    NaN, NaN, NaN, NaN,
    NaN, NaN, NaN, NaN,
    NaN, NaN, NaN, NaN,
    NaN, NaN, NaN, NaN
  ];

  //Player vars
  var playerX = 'pX';
  var playerO = 'pO';
  var currentPlayer = null;

  function setNextTurn(){
    if (currentPlayer === playerX) {
      currentPlayer = playerO;
    }
    else {
      currentPlayer = playerX;
    }
    $('#messages').text(currentPlayer);
  }

  function checkForWinner(){
    //There needs to be a simpler way
    if (positions[0] === positions[1] && positions[1] === positions[2] && positions[2] === positions[3] && positions[3] === positions[4]) {

      console.log("line!");
    }


        //positions[4] === positions[5] && positions[5] === positions[6] && positions[6] === positions[7] && positions[7] === positions[8] ||
        //positions[8] === positions[9] && positions[9] === positions[10] && positions[10] === positions[11] && positions[11] === positions[12] ||
        //positions[12] === positions[13] && positions[13] === positions[14] && positions[14] === positions[15]
  }

  $(document).on('click', '#board .position', function(i) {
    var positionNumber = $(i.currentTarget).index();
    positions[positionNumber]  = currentPlayer;

    var realPosition = positionNumber + 1;
    console.log('You clicked on ' + realPosition);

    $('#board .position:eq(' + positionNumber + ')').addClass(currentPlayer);

    checkForWinner();
    setNextTurn();
  });
  $(document).on('gameWin', function (winner) {
    //Alert Winner
  });
  setNextTurn();
});
