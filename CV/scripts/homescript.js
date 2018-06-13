$(document).ready(function() {

  $("#myName").fadeIn(2000);
  $("#engArt").fadeIn(3000);
  $(".topnav").css("background-color", "transparent");

  $(".topnav").hover(function(){
    //TERRIBLE CODE !!! REPLACE IT LATER !!!!
      setTimeout(function(){
        $(".topnav").css("background-color", 'rgba(255,255,255,0.1)');
      }, 40);
      setTimeout(function(){
        $(".topnav").css("background-color", 'rgba(255,255,255,0.2)');
      }, 80);
      setTimeout(function(){
        $(".topnav").css("background-color", 'rgba(255,255,255,0.4)');
      }, 120);
      setTimeout(function(){
        $(".topnav").css("background-color", 'rgba(255,255,255,0.6)');
      }, 160);
      setTimeout(function(){
        $(".topnav").css("background-color", 'rgba(255,255,255,0.8)');
      }, 180);
      setTimeout(function(){
        $(".topnav").css("background-color", 'rgba(255,255,255,1)');
        $(".topnav").css("box-shadow", "rgba(0,0,0,0.3)");
      }, 200);

    setTimeout(function(){
      $("#estitle").css("color", "black");
      $(".topnav div a").css("color", "black");
    }, 180);
  },function(){
      $(".topnav").css("background-color", "transparent");
      $("#estitle").css("color", "white");
      $(".topnav div a").css("color", "rgba(255,255,255,0.5)");
      $(".topnav").css("box-shadow", "rgba(0,0,0,0)");
    }
  );

  $('video').css({'width': $(window).width() });
  $(window).on('resize', function() {
    $('video').css({ 'height': $(window).height() });
    $('video').css({ 'width': $(window).width() })
  });
});
