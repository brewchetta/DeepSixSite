$(document).ready(function(){
    $('#bannerImg').attr('src', 'Assets/1(BlueDock).jpg');
    $('#tooltip').fadeOut(1);
    $('h3').fadeOut(1);
});

$(document).ready(function(){
  $('.bBox').click(function(){
    $('h3').fadeOut(500).delay(500).fadeIn(2000);
    $('h1').fadeOut(500);
    $('.disclaimer').fadeOut(500).fadeIn(500);
    $('.bContainer').fadeOut(500).delay(500).fadeIn(2000);
    $('#bannerDiv').fadeOut(500, function(){scrollTo(0,0);}).fadeIn(500);
    $('#bAlpha').css( 'cursor', 'pointer' );
    $('#bBeta').css( 'cursor', 'pointer' );
    $('#bGamma').css( 'cursor', 'pointer' );
  });
});

//Various variables that might affect the story are stored here

var pageNum = 0;

var torpedoes = 0;

var tailed = false;

// The restart button
$(document).ready(function(){
  $('h3').click(function(){
    pageNum = 0;
    torpedoes = 0;
    tailed = false;
    $('#bannerImg').attr('src', 'Assets/1(BlueDock).jpg');
    $('h1').delay(500).fadeIn(500);
    $('h3').fadeOut(500);
    $('.disclaimer').fadeOut(500).fadeIn(500);
    $('.bContainer').fadeOut(500).delay(500).fadeIn(2000);
    $('#bannerDiv').fadeOut(500, function(){scrollTo(0,0);}).fadeIn(500);
    $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/0(NoodleBar).jpg')}).fadeIn(1500);
    window.setTimeout(function(){$('.bImg').attr('src','Assets/0(NoodleBar).jpg');}, 500);
    $('#bAlpha').children('.bText').fadeOut(1).html('A boring old submarine manifest').fadeIn(2000);
    $('#bBeta').children('.bText').fadeOut(1).html('A harpoon and wetsuit catalog').fadeIn(2000);
    $('#bGamma').children('.bText').fadeOut(1).html('<br>Something ... classified').fadeIn(2000);
    $('#para1').fadeOut(500, function(){$(this).html(para1_0); nub()}).fadeIn(1000);
    $('#para2').fadeOut(500, function(){$(this).html(para2_0); deepSix()}).fadeIn(1000);
  });
});

// Comments after a button choice tell which page that choice goes to
//Button A
$(document).ready(function(){
  $('#bAlpha').click(function(){
    switch (pageNum) {
      case 0:
        pageNum = 1;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/1(BlueDock).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_1); hydro();}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_1); sixsixsix();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/1(GoatSkull).jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Fine, just fine, you\'ll wait').fadeIn(2000); // 4
        $('#bBeta').children('.bText').fadeOut(1).html('<br>Keep to your schedule').fadeIn(2000); // 5
        $('#bGamma').children('.bText').fadeOut(1).html('You\'ll wait, but only if you get a discount').fadeIn(2000); // 6
        break;
      case 1:
        pageNum = 4;
        torpedoes = 4;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/4().jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_4);}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_4); preSub(); admiralty(); sixsixsix();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/4().jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Stop to help').fadeIn(2000); // ?
        $('#bBeta').children('.bText').fadeOut(1).html('<br>Keep going past them').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('Let\'s go around, as in way around').fadeIn(2000); // ?
        break;
        case 3:
          pageNum = 7;
          $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/7(Market).jpg')}).fadeIn(1500);
          $('#para1').fadeOut(500, function(){$(this).html(para1_7);}).fadeIn(1000);
          $('#para2').fadeOut(500, function(){$(this).html(para2_7); preSub(); admiralty(); sixsixsix();}).fadeIn(1000);
          window.setTimeout(function(){$('.bImg').attr('src','Assets/7(Market).jpg');}, 500);
          $('#bAlpha').children('.bText').fadeOut(1).html('<br>Confront them').fadeIn(2000); // ?
          $('#bBeta').children('.bText').fadeOut(1).html('<br>Lose them').fadeIn(2000); // ?
          $('#bGamma').children('.bText').fadeOut(1).html('<br>Wait until they leave').fadeIn(2000); // set tail to true, ?
          break;
      default:
        alert('Current pageNum is: ' + pageNum + ', currently there is no page progression');
        break;
    };
  });
});

//Button B
$(document).ready(function(){
  $('#bBeta').click(function(){
    switch (pageNum) {
      case 0:
        pageNum = 2;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/2(LibertyRuin).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_2); newYork();}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_2);}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/2(BlueEye).jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>She\'d just slow you down').fadeIn(2000); // ?
        $('#bBeta').children('.bText').fadeOut(1).html('<br>Find out why she\'s so interested').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('<br>Why not? Let\s go now!').fadeIn(2000); // ?
        break;
      case 1:
        pageNum = 5;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/5().jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_5);}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_5); admiralty(); deepSix(); preSub(); newBrooklyn();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/5().jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('').fadeIn(2000); // ?
        $('#bBeta').children('.bText').fadeOut(1).html('').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('').fadeIn(2000); // ?
        break;
      default:
        alert('Current pageNum is: ' + pageNum + ', currently there is no page progression');
        break;
    };
  });
});

//Button G
$(document).ready(function(){
  $('#bGamma').click(function(){
    switch (pageNum) {
      case 0:
        pageNum = 3;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/3(Bartender).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_3);}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_3); newYork();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/3(Bartender).jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Claim ignorance').fadeIn(2000); // 7
        $('#bBeta').children('.bText').fadeOut(1).html('<br>Say what you know').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('<br>Send them on a goosechase').fadeIn(2000); // ?
        break;
        case 1:
        pageNum = 6;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/6().jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_6);}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_6); preSub(); hab();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/6().jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Outrun them').fadeIn(2000); // ?
        $('#bBeta').children('.bText').fadeOut(1).html('<br>Ram them, knock them out').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('<br>Send an SOS').fadeIn(2000); // ?
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

$(document).ready(function(){
  $('h3').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('You will lose all progress if you do this');
  });
  $('h3').mouseleave(function(){
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

function deepSix() {
  $('#deepSix').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('The dangerous stretches of ocean between ports');
  });
  $('#deepSix').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
};

function nub() {
  $('#nub').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('Non-Useful Body, a civilian');
  });
  $('#nub').mouseleave(function(){
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

function newBrooklyn(){
  $('#newBrooklyn').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('One of the largest habs in the Atlantic with a population of over 500,000');
  });
  $('#newBrooklyn').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
}

// Narrative paragraph content goes here
// Content is ordered as paragraph number and then page number

const para1_0 = 'A woman slides onto the stool next to you. She\'s buoyant, energetic, dangerously cheerful. It takes a single look to size her up: she\'s not wearing a wetsuit but instead a short floral-print dress and outlandish sun hat. She\'s a <span id=nub class=tip>nub</span>.<br><br>She\'s sized you up in the same time.';

const para2_0 = '\"What\'s that?\" she asks. She wants to know about the tablet in front of you, the one right next to your bowl of hot noodles. The bartender hands this young woman a drink, a shirley temple you\'d guess, and the woman shrugs and carries the drink to a nearby bubble window.<br><br>Outside it you can see the ocean particulate dance like moths in the dim tavern light. Beyond that is the darkness. What mariners call the <span id=deepSix class=tip>Deep Six.</span><br><br>You turn back to your tablet. What were you looking at again?';

const para1_1 = "Maybe it's the years that have gotten to you, maybe it's the shit quality of the booze around here. Either way, you're tired. At one point this bar carried real dirt grown food. Now it's all <span class='tip' id='hydro'>hydro</span>. You're old enough, you can tell the difference. These noodles sure weren't made from dirt grown rice.</br></br>But what's to be done?";

const para2_1 = "You collect your belongings. The sub\'ll leave in thirty, and it\'s six decks below. And to think, twenty-four decks above and then another mile up is the surface of the Atlantic. Slick with oil, boiling with storms. Deadly.</br></br>Yeah, as if you\'re safer down here.</br></br>The tablet pings before you reach the dock. Everything\'s on schedule, the crew\'s just waiting for you. If only they\'d put elevators in this place, here you are descending a stairwell while exposed pipes drizzle condensation above your head. As you walk onto the docking deck and into your sub bay, a woman passes you and then stops and says, \"Morning captain. Don\'t head off yet, I haven\'t gotten your torpedoes onto the ship.\" </br></br>It takes a second to register. Why were they marked as delivered on the tablet? She\'s burly, a <span id='sixsixsix' class='tip'>six-six-sixer</span> with a goat\'s skull tattooed across her bald scalp and piercings that sprout across her face.";

const para1_2 = "Not just wetsuits, but harpoons and small knives, the best in compressed oxygen tanks and survival water filters. You touch a particularly enticing pair of flippers and a popup blocks your view with \'Ten Best Old World Salvage Spots\'. The ruins of <span id = 'newYork' class = 'tip'>New York City</span> top the list, as always. You\'d have to charter a submarine to get there, or of course swim five hundred miles sideways and a mile up with those sick polydurable flippers.";

const para2_2 = "The young woman returns suddenly. \"You ever been?\" She darts into her shirley temple for a sip. \"I hear it\'s totally flooded, but mutants live on the highest buildings. Like, right above surface level.\"</br>She\'s killing you with that mischievous grin of hers. She says, \"Any chance you\'d head that way? We could go together!\"";

const para1_3 = "You\'re not even sure what it is yet. The data slowly unravels before you, dumping a variety of charts onto your screen that make very little sense. You\'ve got a pattern analysis tool running, and one name keeps popping up over and over. \'Huebert Livingston.\'<br><br>You signal the bartender and they pass you a drink. Beneath the glass is your payment, a data chip with stock numbers.<br><br>The bartender glances at the charts and the name. They shrug. \"Doesn\'t mean a thing to me.\"";

const para2_3 = "You know better than that. It\'s not greek, or even the name of a person. It\'s the name of a submarine, and it\'s docked here at this station. It had just returned from a salvage trip, somewhere like the ruins of <span id='newYork' class='tip'>New York City</span> if you had to guess.<br><br>The bartender looks you in the eye. \"Any ideas what this name means?\"";

const para1_4 = "She senses your impatience and works quickly. It takes a little bit of time before she arrives again with four of the weapons perched on a hand cart. She threw in an extra one for the trouble.<br><br>Your crew loads them up, careful not to talk to the woman. The <span id='sixsixsix' class='tip'>six-six-sixers</span> are petty and volatile. You\'re glad you let this slide.<br><br>The <span class='tip' id='preSub'> pre-sub</span> awaits you.<br><br>Seal and pressurize the submarine, decouple from the moor, activate navigational equipment, full reverse.<br><br>Everything moves smoothly, you\'ve done this job more than a hundred times before. As you move out into the <span id='deepSix' class='tip'>Deep Six</span>, the lights dim automatically to adjust to the darkness. In only a mile the station will be a hazy glow behind you, an angelic halo.";

const para2_4 = "And you\'re out there now. Alone. The currents this deep are gentle, they don\'t rock the submarine. Your crew of five watches their viewscreens lazily before the first mate and another crewperson head off to their bunks.<br><br>Sandy gives you a wave and a nod, she\'s your best navigator. You\'re on course, she means, and then she gives her monitor a puzzled look. \"There\'s an SOS up ahead,\" she says. \"<span id='admiralty' class='tip'>Admiralty Board</span>. Black box.\" <br><br>She\'s trying her best to look impassive. The Admiralty Board is well supplied, nothing sinks their convoys. Still, you\'d get in their good graces if you stopped to help.";

const para1_5 = 'Forget the torpedoes. You haven\'t run into trouble in the Deep Six for a few months now, and you\'re expected in <span id=newBrooklyn class=tip>New Brooklyn</span> in ten days. Your professional reputation is unmarred by late deliveries, you decide to keep it that way. <br><br>The <span class=tip id=preSub> pre-sub</span> awaits you.<br><br>Seal and pressurize the submarine, decouple from the moor, activate navigational equipment, full reverse.<br><br>Everything moves smoothly, you\'ve done this job more than a hundred times before. As you move out into the <span id=deepSix class=tip>Deep Six</span>, the lights dim automatically to adjust to the darkness. In only a mile the station will be a hazy glow behind you, an angelic halo.';

const para2_5 = para2_4;

const para1_6 = "You argue. You\'re on a schedule you say. You mention your distaste for these juvenile devil worshippers. They\'re basically irresponsible teens. You\'d have ignored her completely if she wasn\'t the only dealer in armaments on this <span id='hab' class='tip'>hab</span>. <br><br>She scowls and leaves.<br><br>You head into the submarine and begin your <span id='preSub' class='tip'>pre-sub</span>. Sandy calibrates the navigation map and you\'re checking perishables when Eddie calls you from the pilot seat. You hurry up and see what he sees: about twelve or so six-six-sixers, some of them with knives and harpoons, one with an old double edged sword. And the two with blowtorches.<br><br>\"We\'ve gotta go,\" says Eddie as the woman and her group stride forward. \"We\'ve gotta go!\"<br><br>You immediately jam the red alert and everything inside the sub turns a shade of crimson. Eddie throws the switch on the docking moor and also the reverse. The moor cracks, probably unusable. Backing and submerging at the same time, all the while the six-six-sixers leap up onto the hull. You hear the sound of the blowtorches.";

const para2_6 = "And they stop, these angry hornets run off suddenly. You\'ll get out of the station. The submarine is still pressurizing and the billions of pounds of water overhead are squeezing in through small cracks here and there. Bend so you do not break. You\'ll have to vent some of your precious O2 but that\'s life.<br><br>\"Captain,\" says Sandy, \"Outside!\" <br><br>Where? You take a look at her viewscreen and see a dangerous looking submarine directly behind you, its markings belongs to the six-six-sixers. Of course they\'re out here.";

const para1_7 = "You\'ve been moving through the corridors of this hab for a while now. You know when you\'re being followed and you know who\'s doing the following. It started the moment you left the bar, and it\'s not the bartender. Or probably not them, but more than likely it\'s one of their contacts.<br><br>Whoever it is has managed to avoid direct line of sight, but you\'ve got tricks up your sleeve. You slip into a nearby crowded coffee shop with \'coffee\' being the loose term for a brown hydro sludge they serve. There\'s a security camera here, one you surreptitiously key your tablet into and watch the feed.";

const para2_7 = "Your shadow is pretty uninteresting. A medium person of medium build and medium height, utterly androgynous with a normal shade of brown hair. In other words, you wouldn\'t be able to describe them if you needed to.";
