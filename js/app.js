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

/*
  var rowLength = 4;
  var redCount = 0;
  var blueCount = 0;

  //check horizonal
  for(var i=0, n=positions.length; i<n; i++){
    if((i+1)%rowLength == 0){
      blueCount = 0;
      redCount = 0;
    }
    if(positions[i] == "red"){
      redCount++;
    }
    if(positions[i] == "blue"){
      blueCount++;
    }
    if(blueCount == rowLength){
      // blue wins
    }
    if(redCount == rowLength){
      // red wins
    }
  }

  //check vertical
  for(var i=0, n=rowLength; i<n; i++){
    var pos_1 = positions[i*rowLength];
    var pos_2 = positions[i*rowLength+1];
    var pos_3 = positions[i*rowLength+2];
    var pos_4 = positions[i*rowLength+3];

    if(pos_1 == pos_2 && pos_2 == pos_3 && pos_3 == pos_4){
      if(pos_1 == "red"){
        //red wins
      }else if (pos_1 == "blue"){
        //blue wins
      }

  }

*/

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
    for (var i = 0; i < positions.length; i++){
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
      // playerBlue.css('color','#1B75B7');
      // #('#board .square:hover').css({
      //   'background': 'rgba(0,0,0,.6);'
      // });
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
    //Load a modal pop up
    //Load a button to reset page
    winner = 'Red';
    //Button
    //Reset shit
  }

  function blueWins(){
    winBlockBlue = [];
    $('#messages').text("Blue wins!").css('color','#1B75B7');
    stopUpdatingBoard();
    winner = 'Blue';
    //Button
    //Reset shit
  }

  function reset(){
    $(document).on('click', '#board .square').removeClass('clicked');
  currentPlayer = playerRed;
  winner = null;

  //Board
  EMPTY = '';
  //var clickNum = 0;

  //Create an empty 'board' where players can click
  positions = [
    EMPTY, EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY, EMPTY
  ];


  }

  //Change function type
  //Simplify - then can call and cancel it on win condition
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
      for(i = 0; i < winConditions.length; i++){
        winBlockRed = [];
        //TODO
        //If not in alreadyClicked
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
        for(i = 0; i < winConditions.length; i++){
          winBlockBlue = [];
          //TODO
          //If not in alreadyClicked
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
