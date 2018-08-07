$(document).ready(function(){
    $('#bannerImg').attr('src', 'Assets/1(BlueDock).jpg');
    $('#tooltip').fadeOut(1);
});

$(document).ready(function(){
  $('.bBox').click(function(){
    $('h1').fadeOut(500);
    $('.disclaimer').fadeOut(500).fadeIn(500);
    $('.bContainer').fadeOut(500).delay(500).fadeIn(2000);
    $('#bannerDiv').fadeOut(500, function(){scrollTo(0,0);}).fadeIn(500);
  });
});



var pageNum = 0;
$(document).ready(function(){
  $('#bAlpha').click(function(){
    switch (pageNum) {
      case 0:
        pageNum = 1;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/1(BlueDock).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_1); hydro();}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_1); sixsixsix();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/1(GoatSkull).jpg');}, 500);
        $('#bAlpha').children('.bText').html('<br>Fine, just fine, you\'ll wait');
        $('#bBeta').children('.bText').html('<br>Keep to your schedule');
        $('#bGamma').children('.bText').html('You\'ll wait, but only if you get a discount');
        break;
      case 1:
        pageNum = 4;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/0(SteampunkBar).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_4);}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_4); preSub(); admiralty(); sixsixsix();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/1(GoatSkull).jpg');}, 500);
        $('#bAlpha').children('.bText').html('<br>Stop to help');
        $('#bBeta').children('.bText').html('<br>Keep going past them');
        $('#bGamma').children('.bText').html('Let\'s go around, as in way around');
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
        pageNum = 2;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/2(LibertyRuin).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_2); newYork();}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_2);}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/2(BlueEye).jpg');}, 500);
        $('#bAlpha').children('.bText').html('<br>As if she\'d survive');
        $('#bBeta').children('.bText').html('No chance but let\'s keep chatting');
        $('#bGamma').children('.bText').html('<br>Alright let\'s go!');
        break;
        case 1:
          pageNum = 5;
          $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/5().jpg')}).fadeIn(1500);
          $('#para1').fadeOut(500, function(){$(this).html(para1_5);}).fadeIn(1000);
          $('#para2').fadeOut(500, function(){$(this).html(para2_5); preSub(); hab();}).fadeIn(1000);
          window.setTimeout(function(){$('.bImg').attr('src','Assets/5().jpg');}, 500);
          $('#bAlpha').children('.bText').html('<br>Outrun them');
          $('#bBeta').children('.bText').html('<br>Ram them, knock them out');
          $('#bGamma').children('.bText').html('<br>Send an SOS');
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
        pageNum = 3;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/3(Bartender).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_3);}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_3); newYork();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/3(Bartender).jpg');}, 500);
        $('#bAlpha').children('.bText').html('<br>Claim ignorance');
        $('#bBeta').children('.bText').html('<br>Say what you know');
        $('#bGamma').children('.bText').html('<br>Send them on a goosechase');
        break;
        case 1:
          pageNum = 6;
          $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/3(Bartender).jpg')}).fadeIn(1500);
          $('#para1').fadeOut(500, function(){$(this).html(para1_6);}).fadeIn(1000);
          $('#para2').fadeOut(500, function(){$(this).html(para2_6);}).fadeIn(1000);
          window.setTimeout(function(){$('.bImg').attr('src','Assets/3(Bartender).jpg');}, 500);
          $('#bAlpha').children('.bText').html('');
          $('#bBeta').children('.bText').html('');
          $('#bGamma').children('.bText').html('');
          break;
      default:
        alert('Current pageNum is: ' + pageNum + ', currently there is no page progression');
        break;
    };
  });
});

// Initial tooltips go here
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

// Tooltip functions past page 0 go here
function sixsixsix() {
  $('#sixsixsix').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('People who worship the devil as their apocalyptic saviour');
  });
  $('#sixsixsix').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
};

function hydro(){
  $('#hydro').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('Hydroponically grown ingredients, often considered cheap and tasteless');
  });
  $('#hydro').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
}

function newYork(){
  $('#newYork').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('Abandoned in 2031, the most successful mass evacuation of the time');
  });
  $('#newYork').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
}

function preSub(){
  $('#preSub').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('Pre-Submergence Checklist, average completion time is two minutes');
  });
  $('#preSub').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
}

function admiralty(){
  $('#admiralty').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('A pan-Atlantic military force headed by seven Admirals appointed by the corporate governments');
  });
  $('#admiralty').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
}

function hab(){
  $('#hab').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('Submerged habitats built for post-surface humans');
  });
  $('#hab').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
}

// Narrative paragraph content goes here
// Content is ordered as paragraph number and then page number
const para1_1 = "Maybe it's the years that have gotten to you, maybe it's the shit quality of the booze around here. Either way, you're tired. At one point this bar carried real dirt grown food. Now it's all <span class='tip' id='hydro'>hydro</span>. You're old enough, you can tell the difference. These noodles sure weren't made from dirt grown rice.</br></br>But what's to be done?";

const para2_1 = "You collect your belongings. The sub\'ll leave in thirty, and it\'s six decks below. And to think, twenty-four decks above and then another mile up is the surface of the Atlantic. Slick with oil, boiling with storms. Deadly.</br></br>Yeah, as if you\'re safer down here.</br></br>The tablet pings before you reach the dock. Everything\'s on schedule, the crew\'s just waiting for you. If only they\'d put elevators in this place, here you are descending a stairwell while exposed pipes drizzle condensation above your head. As you walk onto the docking deck and into your sub bay, a woman passes you and then stops and says, \"Morning captain. Don\'t head off yet, I haven\'t gotten your torpedoes onto the ship.\" </br></br>It takes a second to register. Why were they marked as delivered on the tablet? She\'s burly, a <span id='sixsixsix' class='tip'>six-six-sixer</span> with a goat\'s skull tattooed across her bald scalp and piercings that sprout across her face.";

const para1_2 = "Not just wetsuits, but harpoons and small knives, the best in compressed oxygen tanks and survival water filters. You touch a particularly enticing pair of flippers and a popup blocks your view with \'Ten Best Old World Salvage Spots\'. The ruins of <span id = 'newYork' class = 'tip'>New York City</span> top the list, as always. You\'d have to charter a submarine to get there, or of course swim five hundred miles sideways and a mile up with those sick polydurable flippers.";

const para2_2 = "The young woman returns suddenly. \"You ever been?\" She darts into her shirley temple for a sip. \"I hear it\'s totally flooded, but mutants live on the highest buildings. Like, right above surface level.\"</br>She\'s killing you with that mischievous grin of hers. She says, \"Any chance you\'d head that way? We could go together!\"";

const para1_3 = "You\'re not even sure what it is yet. The data slowly unravels before you, dumping a variety of charts onto your screen that make very little sense. You\'ve got a pattern analysis tool running, and one name keeps popping up over and over. \'Huebert Livingston.\'<br><br>You signal the bartender and they pass you a drink. Beneath the glass is your payment, a data chip with stock numbers.<br><br>The bartender glances at the charts and the name. They shrug. \"Doesn\'t mean a thing to me.\"";

const para2_3 = "You know better than that. It\'s not greek, or even the name of a person. It\'s the name of a submarine, and it\'s docked here at this station. It had just returned from a salvage trip, somewhere like the ruins of <span id='newYork' class='tip'>New York City</span> if you had to guess.<br><br>The bartender looks you in the eye. \"Any ideas what this name means?\"";

const para1_4 = "She senses your impatience and works quickly. It takes a little bit of time before she arrives again with several explosive weapons perched on a hand cart. She even threw in an extra one for the trouble.<br><br>Your crew loads them up, careful not to talk to the woman. The <span id='sixsixsix' class='tip'>six-six-sixers</span> are petty and volatile. You\'re glad you let this slide.<br><br>The <span class='tip' id='preSub'> pre-sub</span> awaits you.<br><br>Seal and pressurize the submarine, decouple from the moor, activate navigational equipment, full reverse.<br><br>Everything moves smoothly, you\'ve done this job more than a hundred times before. As you move out into the <span id='deepSix' class='tip'>Deep Six</span>, the lights dim automatically to adjust to the darkness. In only a mile the station will be a hazy glow behind you, an angelic halo.";

const para2_4 = "And you\'re out there now. Alone. The currents this deep are gentle, they don\'t rock the submarine. Your crew of five watches their viewscreens lazily before the first mate and another crewperson head off to their bunks.<br><br>Sandy gives you a wave and a nod, she\'s your best navigator. You\'re on course, she means, and then she gives her monitor a puzzled look. \"There\'s an SOS up ahead,\" she says. \"<span id='admiralty' class='tip'>Admiralty Board</span>. Black box.\" <br><br>She\'s trying her best to look impassive. The Admiralty Board is well supplied, nothing sinks their convoys. Still, you\'d get in their good graces if you stopped to help.";

const para1_5 = "You politely decline the torpedoes. You\'re on a schedule you say. You don\'t mention your distaste for these juvenile devil worshippers. They\'re basically irresponsible teens. You\'d have ignored her completely if she wasn\'t the only dealer in armaments on this <span id='hab' class='tip'>hab</span>. <br><br>She scowls and leaves.<br><br>You head into the submarine and begin your <span id='preSub' class='tip'>pre-sub</span>. Sandy calibrates the navigation map and you\'re checking perishables when Eddie calls you from the pilot seat. You hurry up and see what he sees: about twelve or so six-six-sixers, some of them with knives and harpoons, one with an old double edged sword. And the two with blowtorches.<br><br>\"We\'ve gotta go,\" says Eddie as the woman and her group stride forward. \"We\'ve gotta go!\"<br><br>You immediately jam the red alert and everything inside the sub turns a shade of crimson. Eddie throws the switch on the docking moor and also the reverse. The moor cracks, probably unusable. Backing and submerging at the same time, all the while the six-six-sixers leap up onto the hull. You hear the sound of the blowtorches.";

const para2_5 = "And they stop, these angry hornets run off suddenly. You\'ll get out of the station. The submarine is still pressurizing and the billions of pounds of water overhead are squeezing in through small cracks here and there. Bend so you do not break. You\'ll have to vent some of your precious O2 but that\'s life.<br><br>\"Captain,\" says Sandy, \"Outside!\" <br><br>Where? You take a look at her viewscreen and see a dangerous looking submarine directly behind you, its markings belongs to the six-six-sixers. Of course they\'re out here.";

const para1_6 = "The two of you argue. If you\'re going to wait on something that should already be in your submarine\'s lower deck, you shouldn\'t have to pay. Except, she says, it\'s on the way. It doesn\'t take long before the personal insults filter into the argument. Somewhere along the way you say it: she\'s a whore of the devil, adversary of a god that doesn\'t even exist.<br><br>You shouldn\'t have insulted her religious views.<br><br>For her the fight is quick, for you the fight is quick and painful. You\'ve got a knife, she\'s got a bigger knife, and the next thing you know she\'s fleeing up the stairwell while you clutch at the artery at your throat, the whole world going a little bit darker every second.";

const para2_6 = "Reload to return to the beginning."
