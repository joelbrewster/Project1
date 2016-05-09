$(document).ready(function() {

var body = $('body');

  body.css({
    'text-align': 'center'
  });

//refactor me
$('.col1').mouseover(function() {
  $(this).css({
    'background-color':'seagreen',
    'transform': 'scale(1.2)'
  });
});
$('.col1').mouseout(function() {
  $(this).css({
    'background-color':'transparent',
    'transform':'none'
  });
});

$('.col2').mouseover(function() {
  $(this).css({
    'background-color':'seagreen',
    'transform': 'scale(1.2)'
  });
});
$('.col2').mouseout(function() {
  $(this).css({
    'background-color':'transparent',
    'transform':'none'
  });
});

$('.col3').mouseover(function() {
  $(this).css({
    'background-color':'seagreen',
    'transform': 'scale(1.2)'
  });
});
$('.col3').mouseout(function() {
  $(this).css({
    'background-color':'transparent',
    'transform':'none'
  });
});

$('.col4').mouseover(function() {
  $(this).css({
    'background-color':'seagreen',
    'transform': 'scale(1.2)'
  });
});
$('.col4').mouseout(function() {
  $(this).css({
    'background-color':'transparent',
    'transform':'none'
  });
});

});
