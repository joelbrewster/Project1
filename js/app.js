$(document).ready(function() {

  var rows = $('.row1, .row2, .row3, .row4');
  rows
  .css({
    'text-align': 'center',
    'padding': '2'
  });

  var colums = $('.col1, .col2, .col3, .col4');
  colums
  .css({
    'float': 'left',
    'width': '25%',
    'padding': '20'
  });

  //mouse over stuff
  //$('.col1,.col2,.col3,.col4').mouseover(function() {
    //$(this)
    //.css({
      //'background-color':'green',
      //'transform': 'scale(1.05)'
    //});
  //});
  //$('.col1,.col2,.col3,.col4').mouseout(function() {
    //$(this)
    //.css({
      //'background-color':'transparent',
      //'transform':'none'
    //});
  //});

  var divs = $('<div>');
  divs.onClick=getMove(this);

  function startGame(){
    document.turn = "x";
    console.log(document.turn + "starts.");
  }

  function getMove(columns){
    columns.innerText = document.turn;
    changeTurn();
  }

  function changeTurn(){
    if(document.turn == "X"){
      document.turn = "O";
    } else {
      document.turn = "X";
      }
      console.log(document.turn);
  }
});
