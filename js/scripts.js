$(document).ready(function() {
  $("button#black").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("body").addClass("white-text");
  });
  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
  });




});
