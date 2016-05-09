$(document).ready(function() {

  var body = $('body');

  body.css({
    'text-align': 'center'
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
