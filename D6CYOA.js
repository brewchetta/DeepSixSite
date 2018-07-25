$(document).ready(function(){
    $('#bannerImg').attr('src', 'Assets/1(BlueDock).jpg');
    $('#tooltip').fadeOut(1);
});

$(document).ready(function(){
  $('.bBox').click(function(){
    $('.bContainer').fadeOut(500).fadeIn(5000);
    $('#para2').fadeOut(500).fadeIn(4000);
    $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/1(BlueDock).jpg')}).fadeIn(3000);
    $('#para1').fadeOut(500).fadeIn(2000);
    $('#bannerDiv').fadeOut(500).fadeIn(500);
    scrollTo(0,0);
  });
});

$(document).ready(function(){
  $('#bAlpha').click(function(){
    $('h1').fadeOut(500);
  });
});

$(document).ready(function(){
  $('#bBeta').click(function(){
    $('h1').fadeOut(500);
  });
});

$(document).ready(function(){
  $('#bGamma').click(function(){
    $('h1').fadeOut(500);
  });
});

$(document).ready(function(){
  $('#nub').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('A non-useful body, a civilian');
  });
  $('#nub').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
})

$(document).ready(function(){
  $('#deepSix').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('The dangerous stretches of ocean between ports');
  });
  $('#deepSix').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
})
