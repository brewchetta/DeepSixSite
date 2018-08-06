$(document).ready(function(){
    $('#bannerImg').attr('src', 'Assets/1(BlueDock).jpg');
    $('#tooltip').fadeOut(1);
});

$(document).ready(function(){
  $('.bBox').click(function(){
    $('h1').fadeOut(500);
    $('.bContainer').fadeOut(500).fadeIn(2000);
    $('#bannerDiv').fadeOut(500).fadeIn(500);
    scrollTo(0,0);
  });
});


var pageNum = 0;
$(document).ready(function(){
  $('#bAlpha').click(function(){
    switch (pageNum) {
      case 0:
        alert('Current pageNum is: ' + pageNum);
        pageNum = 1;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/1(BlueDock).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html("Maybe it's the years that have gotten to you, maybe it's the shit quality of the booze around here. Either way, you're tired. At one point this bar carried real dirt grown food. Now it's all <span class='tip' id='hydro'>hydro</span>. You're old enough, you can tell the difference. These noodles sure weren't made from dirt grown rice.</br></br>But what's to be done?");
          $('#hydro').mouseenter(function(e){
            var mouseX = e.pageX + 5;
            var mouseY = e.pageY;
            $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('Hydroponically grown ingredients, often considered cheap and tasteless');
          });
          $('#hydro').mouseleave(function(){
            $('#tooltip').fadeToggle(500);
          });
        })
        .fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html("You collect your belongings. The sub\'ll leave in thirty, and it\'s six decks below. And to think, twenty-four decks above and then another mile up is the surface of the Atlantic. Slick with oil, boiling with storms. Deadly.</br></br>Yeah, as if you\'re safer down here.</br></br>The tablet pings before you reach the dock. Everything\'s on schedule, the crew\'s just waiting for you. If only they\'d put elevators in this place, here you are descending a stairwell while exposed pipes drizzle condensation above your head. As you walk onto the docking deck and into your sub bay, a woman passes you and then stops and says, \"Morning captain. Don\'t head off yet, I haven\'t gotten your torpedoes onto the ship.\" </br></br>It takes a second to register. Why were they marked as delivered on the tablet? She\'s burly, a <span id='sixsixsix' class='tip'>six-six-sixer</span> with a goat\'s skull tattooed across her bald scalp and piercings that sprout across her face."
        );
          $('#sixsixsix').mouseenter(function(e){
            var mouseX = e.pageX + 5;
            var mouseY = e.pageY;
            $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('People who worship the devil as their apocalyptic saviour');
          });
          $('#sixsixsix').mouseleave(function(){
            $('#tooltip').fadeToggle(500);
          });
        })
        .fadeIn(1000);
        $('.bImg').attr('src','Assets/1(GoatSkull).jpg');
        break;
      default:
        alert('Current pageNum is: ' + pageNum + ', currently there is no page progression');
        break;
    };
  });
});

$(document).ready(function(){
  $('#bBeta').click(function(){
    switch (pageNum) {
      case 0:
        alert('Current pageNum is: ' + pageNum);
        pageNum = 2;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/1(BlueDock).jpg')}).fadeIn(1500);
        break;
      default:
        alert('Current pageNum is: ' + pageNum + ', currently there is no page progression');
        break;
    };
  });
});

$(document).ready(function(){
  $('#bGamma').click(function(){
    switch (pageNum) {
      case 0:
        alert('Current pageNum is: ' + pageNum);
        pageNum = 2;
        break;
      default:
        alert('Current pageNum is: ' + pageNum + ', currently there is no page progression');
        break;
    };
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


$('#hydro').mouseenter(function(e){
  var mouseX = e.pageX + 5;
  var mouseY = e.pageY;
  $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('Hydroponically grown ingredients, often considered cheap and tasteless');
});
$('#hydro').mouseleave(function(){
  $('#tooltip').fadeToggle(500);
});
