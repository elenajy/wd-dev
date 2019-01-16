$(document).ready(function() {
  $('#aboutMe').hide();

  $("#changeText").mouseenter(function() {
    $("#changeText").addClass("textChange");
  });

  $("#changeText").mouseleave(function() {
    $("#changeText").removeClass("textChange");
  });

  $('#myName').click(function() {

    $('#aboutMe').toggle(1000);
  });
});
