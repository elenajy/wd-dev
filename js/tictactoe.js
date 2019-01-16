$(document).ready(function() {
  $('.testCase').mousedown(function(event) {
    switch (event.which) {
      case 1:
        alert('Left mouse button is pressed');
        break;
      case 2:
        alert('Middle mouse button is pressed');
        break;
      case 3:
        alert('Right mouse button is pressed');
        break;
      default:
        alert('Error');
    }
  });

  $('.myClass').mousedown(function(event) {
    switch (event.which) {
      case 1:
        $(this).addClass('peach');
        break;
      case 2:
        $(this).addClass('papaya');
        break;
      case 3:
        $(this).removeClass('papaya');
        $(this).removeClass('peach');
        break;
      default:
        alert('Error');
    }
  });

});
