$(document).ready(function() {
  var positions = [
    1, 2, 4, 8,
    NaN, NaN, NaN, NaN,
    NaN, NaN, NaN, NaN,
    NaN, NaN, NaN, NaN
  ];

  winnerNumbers = [15, 240, 3840, 61440, 4369, 8738, 17476, 34948];

  //Player vars
  var playerRed = 'red';
  var playerBlue = 'blue';
  var currentPlayer = null;
  var clickNum = 0;

  function setNextTurn(){
    if (currentPlayer === playerRed) {
      currentPlayer = playerBlue;
    }
    else {
      currentPlayer = playerRed;
    }
    $('#messages').text(currentPlayer);
  }

  //function checkForWinner(){
    //if ((positions[0] === positions[1] && positions[1] === positions[2] && positions[2] === positions[3] && positions[3] === positions[4])
    //positions[4] === positions[5] && positions[5] === positions[6] && positions[6] === positions[7] && positions[7] === positions[8] ||
    //positions[8] === positions[9] && positions[9] === positions[10] && positions[10] === positions[11] && positions[11] === positions[12] ||
    //positions[12] === positions[13] && positions[13] === positions[14] && positions[14] === positions[15]
  //}

  $(document).on('click', '#board .position', function(i) {
    var positionNumber = $(i.currentTarget).index();
    positions[positionNumber]  = currentPlayer;

    var realPosition = positionNumber + 1;
    console.log('You clicked on ' + realPosition);
    clickNum++;
    console.log(clickNum);
    //If 16 blocks have been clicked, don't let anymore player clicks

    $('#board .position:eq(' + positionNumber + ')').addClass(currentPlayer);

    //checkForWinner();
    setNextTurn();
  });

  $(document).on('gameWin', function (winner) {
    //Alert Winner
  });
  setNextTurn();
});
