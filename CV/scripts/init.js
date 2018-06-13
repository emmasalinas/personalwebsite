/*-----------------------------------------------------------------------------------
/*
/* JS mainly for work page
/*
-----------------------------------------------------------------------------------*/

$(document).ready(function() {

  resetPages();
  openPageOne();

  $("#titleOne").click(function(){resetPages(); openPageOne();});
  $("#titleTwo").click(function(){resetPages(); openPageTwo();});
  $("#titleThree").click(function(){resetPages(); openPageThree();});
  $("#titleFour").click(function(){resetPages(); openPageFour();});
  $("#titleFive").click(function(){resetPages(); openPageFive();});

  //// - - - - - - - - - - - - - - - - - - - - - - - - - - - - ALL RESETS
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
    $("img#webDev").css("left", "-606px");
    $("img#andDes1").css("left","-267px");
    $("img#mobApp").css("left","-532px");
    $("img#development").css("left","-378px");
    $("img#andDes2").css("left","-267px");
    $("img#logoDes").css("left","-355px");
    //add more as more slides are added
    //media
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - JS FOR SLIDES
  var animating= false;
  function slideWEBD(){
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
  function slideLOGO(){
    $("#logoDes").animate({left: "+=355px"}, 355);
  }
  function slideMEDIA(){}//to be created
  function slideART(){}//to be created

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - JS FOR OPEN TAB
  function openTabSettings(openTabTitle, openTab){
    $(openTabTitle).css({"color":"black", "font-size":"18px"});
    $(openTab).css({
      "filter": "brightness(100%)",
      "z-index": "5",
      "height": "220px",
      "width": "220px"
    });
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - JS FOR OPEN PAGE
  function openPageOne(){
    openTabSettings("#titleOne","#tabOne");
    $("#tabFive").css("z-index", "1");
    $("#tabFour").css("z-index", "2");
    $("#tabThree").css("z-index", "3");
    $("#tabTwo").css("z-index", "4");
    $("#WEBD").css("display", "block");
    slideWEBD();
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
    openTabSettings("#titleFour","#tabFour");
    $("#tabFive").css("z-index", "4");
    $("#tabThree").css("z-index", "4");
    $("#tabTwo").css("z-index", "3");
    $("#tabOne").css("z-index", "2");
    slideMEDIA();
  }
  function openPageFive(){
    openTabSettings("#titleFive","#tabFive");
    $("#tabFour").css({"z-index": "4"});
    $("#tabThree").css({"z-index": "3"});
    $("#tabTwo").css({"z-index": "2"});
    $("#tabOne").css({"z-index": "1"});
    slideART();
  }

});
