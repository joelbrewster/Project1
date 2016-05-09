$(document).ready(function() {

  var rows = $('.row1, .row2, .row3, .row4');

  rows.css({
    'text-align': 'center',
    'padding': '2'
  });


  var colums = $('.col1, .col2, .col3, .col4');
  /*Remember gutters later*/

  colums.css({
    'float': 'left',
    'width': '25%',
    'padding': '20'
  });

  //refactor me
  $('.col1,.col2,.col3,.col4').mouseover(function() {
    $(this).css({
      'background-color':'black',
      'transform': 'scale(1.05)'
    });
  });
  $('.col1,.col2,.col3,.col4').mouseout(function() {
    $(this).css({
      'background-color':'transparent',
      'transform':'none'
    });
  });
});
