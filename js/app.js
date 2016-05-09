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

  $('.col1,.col2,.col3,.col4').mouseover(function() {
    $(this)
    .css({
      'background-color':'black',
      'transform': 'scale(1.05)'
    });
  });
  $('.col1,.col2,.col3,.col4').mouseout(function() {
    $(this)
    .css({
      'background-color':'transparent',
      'transform':'none'
    });
  });
  //Add mouse over sound click

  $('.col1').on('click', function(){
  //$(this)
  //Append text to div later
  //Fix up overflow
  //.append('<img src="assets/giphy.gif" alt="">')
  //.css({'width': '1'});

  function startGame(){
    document.turn = "x";
    console.log(document.turn + "starts.");
  }

  function getMove(FIXMEdiv){
    //Need to sort html divs
    //TODO
    FIXMEdiv.innerText = document.turn;
  }

  function changeTurn(){
    if(document.turn == "X"){
      document.turn = "O";
    } else {
      document.turn = "X";
      }
    }
  });
});

