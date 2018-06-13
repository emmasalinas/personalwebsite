/*-----------------------------------------------------------------------------------
/*
/* JS mainly for work page
/*
-----------------------------------------------------------------------------------*/

$(document).ready(function() {

  resetPages();

  if($("#tabOne").css("z-index") == 5 ){
    openPageOne();
  }

  $("#tabOne").click(function(){resetPages(); openPageOne();});
  $("#tabTwo").click(function(){resetPages(); openPageTwo();});
  $("#tabThree").click(function(){resetPages(); openPageThree();});
  $("#tabFour").click(function(){resetPages(); openPageFour();});
  $("#tabFive").click(function(){resetPages(); openPageFive();});


  function resetPages(){
    $(".pages").css("display", "none");
    resetTabs();
    resetSlides();
  }

  function resetTabs(){
    //reset font and size
    $(".tabTitles").css({"color":"white", "font-size":"16px"});
    $("img.tabs").css({"height": "216px", "width":"216px"});
    //reset brightnesses
    $("#tabOne").css({"filter": "brightness(30%)"});
    $("#tabTwo").css({"filter": "brightness(25%)"});
    $("#tabThree").css({"filter": "brightness(20%)"});
    $("#tabFour").css({"filter": "brightness(15%)"});
    $("#tabFive").css({"filter": "brightness(10%)"});
  }

  function resetSlides(){
    $("#webDev").css("left", "-606px");
    $("#andDes1").css("left","-267px");
    $("#mobApp").css("left","-532px");
    $("#development").css("left","-378px");
    $("#andDes2").css("left","-267px");
    //add more as more slides are added
  }


  var animating= false;
  function slideWDAD(){
    if(animating) return;
    animating = true;
    $("#webDev").animate({left: "+=606px"}, 606);
    setTimeout(function(){
     $("#andDes1").animate({left: "+=267px"}, 320, function(){
       animating = false;
      });
    },581);
  }

  function slideAPPS(){
    $("#mobApp").animate({left: "+=532px"}, 532);
    setTimeout(function(){
      $("#development").animate({left: "+=378px"},454);
    },511);
    setTimeout(function(){
     $("#andDes2").animate({left: "+=267px"},374);
    },889);
  }

  function slideLOGO(){}//to be created

  function openTabSettings(openTabTitle, openTab){
    $(openTabTitle).css({"color":"black", "font-size":"18px"});
    $(openTab).css({
      "filter": "brightness(100%)",
      "z-index": "5",
      "height": "220px",
      "width": "220px"
    });
  }

  function openPageOne(){
    openTabSettings("#titleOne","#tabOne");
    //change order of tabs
    $("#tabFive").css("z-index", "1");
    $("#tabFour").css("z-index", "2");
    $("#tabThree").css("z-index", "3");
    $("#tabTwo").css("z-index", "4");
    //show page
    $("#WDAD").css("display", "block");
    //call slides
    slideWDAD();
  }

  function openPageTwo(){
    openTabSettings("#titleTwo","#tabTwo");
    $("#tabFive").css({"z-index": "2"});
    $("#tabFour").css({"z-index": "3"});
    $("#tabThree").css({"z-index": "4"});
    $("#tabOne").css({"z-index": "4"});
    $("#APPS").css("display", "block");
    slideAPPS();
  }

  function openPageThree(){
    openTabSettings("#titleThree","#tabThree");
    $("#tabFive").css("z-index", "3");
    $("#tabFour").css("z-index", "4");
    $("#tabTwo").css("z-index", "4");
    $("#tabOne").css("z-index", "3");
    $("#LOGO").css("display", "block");
    slideLOGO();
  }

  function openPageFour(){
    //replace with openTabSettings() when title is created
    $("#tabFour").css({
      "filter": "brightness(100%)",
      "z-index": "5",
      "height": "220px",
      "width": "220px"
    });
    $("#tabFive").css("z-index", "4");
    $("#tabThree").css("z-index", "4");
    $("#tabTwo").css("z-index", "3");
    $("#tabOne").css("z-index", "2");
  }

  function openPageFive(){
    //replace with openTabSettings() when title is created
    $("#tabFive").css({
      "filter": "brightness(100%)",
      "z-index": "5",
      "height": "220px",
      "width": "220px",
    });
    $("#tabFour").css({"z-index": "4"});
    $("#tabThree").css({"z-index": "3"});
    $("#tabTwo").css({"z-index": "2"});
    $("#tabOne").css({"z-index": "1"});
  }
});
