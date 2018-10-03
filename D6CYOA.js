$(document).ready(function(){
    $('#bannerImg').attr('src', 'Assets/1(BlueDock).jpg');
    $('#tooltip').fadeOut(1);
    $('h3').fadeOut(1);
    assignTooltips();
});

$(document).ready(function(){
  $('#debug').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('pageNum = ' + pageNum + '; torpedoes = ' + torpedoes + '; tailed = ' + tailed + '; animal = ' + animal + '; damage = ' + damage + '; wounded = ' + wounded + '; serumData = ' + serumData + ';');
  });
  $('#debug').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
  $('#debug').click(function(){
    alert('Something will go here!')
  });
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
// (Possibly change to an object to condense it?)
var pageNum = 0;
var torpedoes = 0;
var tailed = false;
var animal = '';
var damage = 0;
var wounded = false;
var serumData = 0;

// The restart button
$(document).ready(function(){
  $('h3').click(function(){
    pageNum = 0;
    torpedoes = 0;
    tailed = false;
    wounded = false;
    animal = '';
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
    $('#para1').fadeOut(500, function(){$(this).html(para1_0); assignTooltips();}).fadeIn(1000);
    $('#para2').fadeOut(500, function(){$(this).html(para2_0); assignTooltips();}).fadeIn(1000);
  });
});

/* New plan to refactor this work:
1. Create a number of smaller functional chunks that can be called in a main change page function.
2. Reformat pages so on normal monitors and tablets they're a single page.
3. Reformat buttons so it adds and subtracts buttons as needed
4. Have only one paragraphs chunk per page. Make larger 'pages' without choices easily clicked through



// Comments after a button choice tell which page that choice goes to
//Button A
$(document).ready(function(){
  $('#bAlpha').click(function(){
    switch (pageNum) {
      case 0:
        pageNum = 1;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/1(BlueDock).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_1); assignTooltips();}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_1); assignTooltips();}).fadeIn(1000);
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
        $('#para2').fadeOut(500, function(){$(this).html(para2_4); assignTooltips();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/4().jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Stop to help').fadeIn(2000); // 9
        $('#bBeta').children('.bText').fadeOut(1).html('<br>Keep going past them').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('Let\'s go around, as in way around').fadeIn(2000); // ?
        break;
      case 3:
        pageNum = 7;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/7(Market).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_7);}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_7); assignTooltips();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/7(Market).jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Confront them').fadeIn(2000); // ?
        $('#bBeta').children('.bText').fadeOut(1).html('<br>Lose them').fadeIn(2000); // 8
        $('#bGamma').children('.bText').fadeOut(1).html('<br>Wait until they leave').fadeIn(2000); // set tail to true, ?
        break;
      case 4:
        pageNum = 9;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/9(IndustrialHab).jpg'); $('#bannerImg').attr('src', 'Assets/9(IndustrialHab).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_9);}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_9); assignTooltips();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/9(IndustrialHab).jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Dock at the empty moor').fadeIn(2000); // 10
        $('#bBeta').children('.bText').fadeOut(1).html('<br>Lead a diving team over').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('<br>Nope nope nope, you\'re leaving').fadeIn(2000); // set tail to true, ?
        break;
      case 5:
        pageNum = 9;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/9(IndustrialHab).jpg'); $('#bannerImg').attr('src', 'Assets/9(IndustrialHab).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_9);}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_9); assignTooltips();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/9(IndustrialHab).jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Dock at the empty moor').fadeIn(2000); // 10
        $('#bBeta').children('.bText').fadeOut(1).html('<br>Lead a diving team over').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('<br>Nope nope nope, you\'re leaving').fadeIn(2000); // set tail to true, ?
        break;
      case 9:
        pageNum = 10;
        animal = 'piglets';
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/10(Cryo).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_10);}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_10); assignTooltips();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/10(Cryo).jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Read it').fadeIn(2000); // 11
        $('#bBeta').children('.bText').fadeOut(1).html('Download it, the Admiralty can read it').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('<br>Wait, why is that cow here?').fadeIn(2000); // 12
        break;
      case 10:
        if (wounded == false) {
          serumData = 1;
          pageNum = 11;
          damage = 1;
          wounded = true;
          $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/11().jpg')}).fadeIn(1500);
          $('#para1').fadeOut(500, function(){$(this).html(para1_11);}).fadeIn(1000);
          $('#para2').fadeOut(500, function(){$(this).html(para2_11); assignTooltips();}).fadeIn(1000);
          window.setTimeout(function(){$('.bImg').attr('src','Assets/11().jpg');}, 500);
          $('#bAlpha').children('.bText').fadeOut(1).html('<br>Full ahead!').fadeIn(2000); // ?
          $('#bBeta').children('.bText').fadeOut(1).html('Fire torpedo!').fadeIn(2000); // ?
          $('#bGamma').children('.bText').fadeOut(1).html('Outmaneuver it until it gets tired').fadeIn(2000); // ?
        } else {alert('Dead!')};
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
        $('#para1').fadeOut(500, function(){$(this).html(para1_2); assignTooltips();}).fadeIn(1000);
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
        $('#para2').fadeOut(500, function(){$(this).html(para2_5); assignTooltips();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/5().jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Stop to Investigate').fadeIn(2000); // 9
        $('#bBeta').children('.bText').fadeOut(1).html('<br>Keep going past them').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('Go around, as in way around').fadeIn(2000); // ?
        break;
      case 7:
        pageNum = 8;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/8(BlueCorridor).jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_8);}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_8); assignTooltips();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/8(BlueCorridor).jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Sneak on board').fadeIn(2000); // ?
        $('#bBeta').children('.bText').fadeOut(1).html('<br>Take out the guards').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('Impersonate a high ranking official and board').fadeIn(2000); // ?
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
        $('#para2').fadeOut(500, function(){$(this).html(para2_3); assignTooltips();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/3(Bartender).jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Claim ignorance').fadeIn(2000); // 7
        $('#bBeta').children('.bText').fadeOut(1).html('<br>Say what you know').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('<br>Send them on a goosechase').fadeIn(2000); // ?
        break;
      case 1:
        pageNum = 6;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/6().jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_6);}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_6); assignTooltips();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/6().jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Outrun them').fadeIn(2000); // ?
        $('#bBeta').children('.bText').fadeOut(1).html('<br>Ram them, knock them out').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('<br>Send an SOS').fadeIn(2000); // ?
        break;
      case 10:
        pageNum = 12;
        damage = 1;
        $('.mainImg').fadeOut(500, function(){$(this).attr('src', 'Assets/12().jpg')}).fadeIn(1500);
        $('#para1').fadeOut(500, function(){$(this).html(para1_12);}).fadeIn(1000);
        $('#para2').fadeOut(500, function(){$(this).html(para2_12); assignTooltips();}).fadeIn(1000);
        window.setTimeout(function(){$('.bImg').attr('src','Assets/12().jpg');}, 500);
        $('#bAlpha').children('.bText').fadeOut(1).html('<br>Full ahead!').fadeIn(2000); // ?
        $('#bBeta').children('.bText').fadeOut(1).html('Fire torpedo!').fadeIn(2000); // ?
        $('#bGamma').children('.bText').fadeOut(1).html('Outmaneuver it until it gets tired').fadeIn(2000); // ?
        break;
      default:
        alert('Current pageNum is: ' + pageNum + ', currently there is no page progression');
        break;
    };
  });
});

// Tooltips bound to an element's id
const tooltips = {
  signLang: 'ASL is a common language among divers in the Atlantic who can\'t afford JANUS helmet communicators',
  kinerine: 'A chemical cocktail that oxidizes the blood and relieves the effects of intense water pressure',
  janus: 'A system using sonic waves to transmit information, similar to radiowaves above water',
  war: 'The submarine wars of the 40\'s ended national sovereignty in favor of corporate domain',
  harpoon: 'Bullet guns common on the surface have been outlawed throughout the Atlantic; harpoons don\'t pose the same risk to habs that a stray bullet does',
  newBrooklyn: 'One of the largest habs in the Atlantic with a population of over 500,000',
  hab: 'Submerged habitats built for post-surface humans',
  admiralty: 'A pan-Atlantic military force headed by seven Admirals appointed by the corporate governments',
  preSub: 'Pre-Submergence Checklist, average completion time is two minutes',
  newYork: 'Abandoned in 2031, the most successful mass evacuation on the Eastern seaboard',
  hydro: 'Hydroponically grown ingredients, often considered cheap and tasteless',
  nub: 'Non-Useful Body, a civilian',
  deepSix: 'The dangerous stretches of ocean between ports of call',
  sixsixsix: 'People who worship the devil as their apocalyptic saviour'
};

// This must be called on every new page to bind tooltips
function assignTooltips() {
  $('.tip').mouseenter(
    function(e){
      var mouseX = e.pageX + 5;
      var mouseY = e.pageY;
      $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text(tooltips[this.id]);
  });
  $('.tip').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
};


// Narrative paragraph content goes here
// Content is ordered as paragraph number and then page number

const para1_0 = 'A woman slides onto the stool next to you. She\'s buoyant, energetic, dangerously cheerful. It takes a single look to size her up: she\'s not wearing a wetsuit but instead a short floral-print dress and outlandish sun hat. She\'s a <span id=nub class=tip>nub</span>.<br><br>She\'s sized you up in the same time.';

const para2_0 = '\"What\'s that?\" she asks. She wants to know about the tablet in front of you, the one right next to your bowl of hot noodles. The bartender hands this young woman a drink, a shirley temple you\'d guess, and the woman shrugs and carries the drink to a nearby bubble window.<br><br>Outside it you can see the ocean particulate dance like moths in the dim tavern light. Beyond that is the darkness. What mariners call the <span id=deepSix class=tip>Deep Six.</span><br><br>You turn back to your tablet. What were you looking at again?';

const para1_1 = "Maybe it's the years that have gotten to you, maybe it's the shit quality of the booze around here. Either way, you're tired. At one point this bar carried real dirt grown food. Now it's all <span class='tip' id='hydro'>hydro</span>. You're old enough, you can tell the difference. These noodles sure weren't made from dirt grown rice.</br></br>But what's to be done?";

const para2_1 = "You collect your belongings. The sub\'ll leave in thirty, and it\'s six decks below. And to think, twenty-four decks above and then another mile up is the surface of the Atlantic. Slick with oil, boiling with storms. Deadly.</br></br>Yeah, as if you\'re safer down here.</br></br>The tablet pings before you reach the dock. Everything\'s on schedule, the crew\'s just waiting for you. If only they\'d put elevators in this place, here you are descending a stairwell while exposed pipes drizzle condensation above your head. As you walk onto the docking deck and into your sub bay, a woman passes you and then stops and says, \"Morning captain. Don\'t head off yet, I haven\'t gotten your torpedoes onto the ship.\" </br></br>It takes a second to register. Why were they marked as delivered on the tablet? She\'s burly, a <span id='sixsixsix' class='tip'>six-six-sixer</span> with a goat\'s skull tattooed across her bald scalp and piercings that sprout across her face.";

const para1_2 = "Not just wetsuits, but <span id=harpoon class=tip>harpoons</span> and small knives, the best in compressed oxygen tanks and survival water filters. You touch a particularly enticing pair of flippers and a popup blocks your view with \'Ten Best Old World Salvage Spots\'. The ruins of <span id = 'newYork' class = 'tip'>New York City</span> top the list, as always. You\'d have to charter a submarine to get there, or of course swim five hundred miles sideways and a mile up with those sick polydurable flippers.";

const para2_2 = "The young woman returns suddenly. \"You ever been?\" She darts into her shirley temple for a sip. \"I hear it\'s totally flooded, but mutants live on the highest buildings. Like, right above surface level.\"</br>She\'s killing you with that mischievous grin of hers. She says, \"Any chance you\'d head that way? We could go together!\"";

const para1_3 = "You\'re not even sure what it is yet. The data slowly unravels before you, dumping a variety of charts onto your screen that make very little sense. You\'ve got a pattern analysis tool running, and one name keeps popping up over and over. \'Huebert Livingston.\'<br><br>You signal the bartender and they pass you a drink. Beneath the glass is your payment, a data chip with stock numbers.<br><br>The bartender glances at the charts and the name. They shrug. \"Doesn\'t mean a thing to me.\"";

const para2_3 = "You know better than that. It\'s not greek, or even the name of a person. It\'s the name of a submarine, and it\'s docked here at this station. It had just returned from a salvage trip, somewhere like the ruins of <span id='newYork' class='tip'>New York City</span> if you had to guess.<br><br>The bartender looks you in the eye. \"Any ideas what this name means?\"";

const para1_4 = "She senses your impatience and works quickly. It takes a little bit of time before she arrives again with four of the weapons perched on a hand cart. She threw in an extra one for the trouble.<br><br>Your crew loads them up, careful not to talk to the woman. The <span id='sixsixsix' class='tip'>six-six-sixers</span> are petty and volatile. You\'re glad you let this slide.<br><br>The <span class='tip' id='preSub'> pre-sub</span> awaits you.<br><br>Seal and pressurize the submarine, decouple from the moor, activate navigational equipment, full reverse.<br><br>Everything moves smoothly, you\'ve done this job more than a hundred times before. As you move out into the <span id='deepSix' class='tip'>Deep Six</span>, the lights dim automatically to adjust to the darkness. In only a mile the station will be a hazy glow behind you, an angelic halo.";

const para2_4 = "And you\'re out there now. Alone. The currents this deep are gentle, they don\'t rock the submarine. Your crew of five watches their viewscreens lazily before the engineer and another crewperson head off to their bunks.<br><br>Sandy gives you a wave and a nod, she\'s your navigator and first mate. You\'re on course, she means, and then she gives her monitor a puzzled look. \"There\'s an SOS up ahead,\" she says. \"<span id='admiralty' class='tip'>Admiralty Board</span>. Black box.\" <br><br>She\'s trying her best to look impassive. The Admiralty Board is well supplied, nothing sinks their convoys. Still, you\'d get in their good graces if you stopped to help.";

const para1_5 = 'Forget the torpedoes. You haven\'t run into trouble in the Deep Six for a few months now, and you\'re expected in <span id=newBrooklyn class=tip>New Brooklyn</span> in ten days. Your professional reputation is unmarred by late deliveries, you decide to keep it that way. <br><br>The <span class=tip id=preSub> pre-sub</span> awaits you.<br><br>Seal and pressurize the submarine, decouple from the moor, activate navigational equipment, full reverse.<br><br>Everything moves smoothly, you\'ve done this job more than a hundred times before. As you move out into the <span id=deepSix class=tip>Deep Six</span>, the lights dim automatically to adjust to the darkness. In only a mile the station will be a hazy glow behind you, an angelic halo.';

const para2_5 = para2_4;

const para1_6 = "You argue. You\'re on a schedule you say. You mention your distaste for these juvenile devil worshippers. They\'re basically irresponsible teens. You\'d have ignored her completely if she wasn\'t the only dealer in armaments on this <span id='hab' class='tip'>hab</span>. <br><br>She scowls and leaves.<br><br>You head into the submarine and begin your <span id='preSub' class='tip'>pre-sub</span>. Your first mate Sandy calibrates the navigation map and you\'re checking perishables when Eddie calls you from the pilot seat. You hurry up and see what he sees: about twelve or so six-six-sixers, some of them with knives and harpoons, one with an old double edged sword. And the two with blowtorches.<br><br>\"We\'ve gotta go,\" says Eddie as the woman and her group stride forward. \"We\'ve gotta go!\"<br><br>You immediately jam the red alert and everything inside the sub turns a shade of crimson. Eddie throws the switch on the docking moor and also the reverse. The moor cracks, probably unusable. Backing and submerging at the same time, all the while the six-six-sixers leap up onto the hull. You hear the sound of the blowtorches.";

const para2_6 = "And they stop, these angry hornets run off suddenly. You\'ll get out of the station. The submarine is still pressurizing and the billions of pounds of water overhead are squeezing in through small cracks here and there. Bend so you do not break. You\'ll have to vent some of your precious O2 but that\'s life.<br><br>\"Captain,\" says Sandy, \"Outside!\" <br><br>Where? You take a look at her viewscreen and see a dangerous looking submarine directly behind you, its markings belongs to the six-six-sixers. Of course they\'re out here.";

const para1_7 = "You\'ve been moving through the corridors of this hab for a while now. You know when you\'re being followed and you know who\'s doing the following. It started the moment you left the bar, and it\'s not the bartender. Or probably not them, but more than likely it\'s one of their contacts.<br><br>Whoever it is has managed to avoid direct line of sight, but you\'ve got tricks up your sleeve. You slip into a nearby crowded coffee shop with \'coffee\' being the loose term for a brown hydro sludge they serve. There\'s a security camera here, one you surreptitiously key your tablet into and watch the feed.";

const para2_7 = "Your shadow is pretty uninteresting. A medium person of medium build and medium height, utterly androgynous with a normal shade of brown hair. In other words, you wouldn\'t be able to describe them if you needed to.";

const para1_8 = 'It\'s a quick game of cat and mouse. You walk through a crowd of affluent tourists and then duck into a nearby eatery. The shadow follows, but you\'re already a step ahead. You\'re bustling through the kitchen, asking where the clean aprons are, you work here now. And then out a delivery hatch, onto the service level between this hab\'s main causeway and the bulkhead, down a ladder that leads to the docking level.<br><br>You check over your shoulder. They\'re gone. You hate to do this to the bartender but at least they\'ll understand. A quick lookup on the mooring directory reveals the Huebert Livingston at B-08. You\'ll take one of the maintenance tunnels.';

const para2_8 = 'There\'s a couple of toughs guarding the Huebert. Thugs with <span class=tip id=harpoon>harpoon guns</span> clipped to the hips of their wetsuits. A tuxedo patterned cat watches them lazily from the top of the submarine\'s conning tower.';

const para1_9 = 'Sandy lays in a new heading, ten miles SSW she estimates. That\'s where the <span id=janus class=tip>JANUS signals</span> are coming from. The message repeats in a loop, the urgent robotic voice occasionally gurgles with static. It\'s mostly gibberish mixed with strongly worded calls for help.<br><br> \"I\'ve never even seen an <span id=admiralty class=tip>Admiralty</span> distress call before,\" says Sandy. \"I think a lot of this is encoded. You know those old movies where people venture into the dark and get picked off one by one? Aliens, demons, homicidal masked men.\" <br><br>The engineer arrives with some caffeinated hydro sludge she calls coffee. \"On duty,\" she says. \"What\'s all this?\"<br><br> Sandy beckons the two of you over. She\'s got a feed from one of the forward cameras. \"Look.\"';

const para2_9 = 'It\'s an old industrial station, barely even enough space to be a proper <span id=hab class=tip>hab</span>. You\'d guess it\'s <span id=war class=tip>pre-war</span> although that\'d mean it predates the Admiralty Board. There\'s a single docking moor, and from the admittedly pixelated camera feed it looks very empty.<br><br> \"You know all those old movies about abandoned stations?\" says Sandy.';

const para1_10 = 'Rust has eaten away the creases of the dock. It\'s dull red in the beam of your flashlight. Everything here smells just a little bit like iron.<br><br>Your engineer steps out onto the platform and shines the light on your sub\'s sleek hull. \"There\'s serious flooding in the lower levels of the structure. That\'s also where the black box is transmitting.\"<br><br> There\'s a flurry of movement from the edge of the dock. You swing the flashlight\'s beam in that direction and see the gleam off a pair of eyes.<br><br> Beady black eyes.<br><br> Piglet eyes. It\'s a small herd, assuming you call a group of piglets a herd. A brood? A flock? A murder? They\'re wide eyed and stumbling over each other to stay out of the light.<br><br> Your engineer rolls her eyes but you hear a crackle from the shortwave radio. \"Sandy calling on all frequencies, may we keep the piggies? I\'m not taking no for an answer.\"<br><br> The engineer replies, \"You\'ll have to actually step onto the station for that.\"<br><br> \"In that case this rescue operation is a go. I\'ll have them in the cargo hold in five.\"<br><br> The piglets quiver in a bunch while your engineer strides down the corridor. She calls back, \"That new pig shit you\'re going to find all over the deck? It\'s Sandy\'s responsibility.\"';

const para2_10 = '<br><br> Millions of pounds of pressurized water press against the closed doors here. Some of the doors. You knock each one before opening it. Sometimes it\'s the hollow sound of air, sometime the dull echo of liquid.<br><br> Finally you give up on finding a safe passage through the structure. You\'ll have to swim to the black box from the outside.<br><br> The engineer injects some <span id=kinerine class=tip>kinerine</span> into her thigh and looks over towards you. \"I hate this shit. Makes me feel nauseous. It\'s been almost a year since I had to do this.\"<br><br> It\'s true. As the chemical from your own syringe begins to bubble through your body you can feel its sickening effects. It\'ll be gone in a few minutes, and at least you\'ll be able to dive this deeply without a suit.<br><br> Sandy walks in with an entourage of piglets. \"Good luck in all that cramped wreckage. And please don\'t haunt me if the deep sea aliens get you.\"<br><br> It takes a few minutes for you to swim from the sub to the structure and a good chunk of it is buried into the mud that coats much of the ocean bottom. You find an opening and squeeze through, engineer just behind you. Your flashlight travels across a hulk of equipment you don\'t understand.<br><br> You see a body floating above the floor. A cow carcass, its flesh mostly torn away by scavengers like lampreys. And the other things, most of them unnamed.<br><br> A computer terminal is still emitting a green light, partially covered by mud and murk. You wipe it away. There\'s slime on your glove.<br><br> The terminal has access to the black box. You can download everything you need to from here.';

const para1_11 = 'You read the output. It\'s mostly gibberish until you get to the mission statement. <br><br>Aria Project Log 11.56<br><br>Trial candidate #67 - No development before sudden brain death - Status - Deceased<br>Trial candidate #68 - Overactivity in the brain stem caused the onset of rapid oxygen deterioration - Status - Deceased<br>Trial candidate #69 - Accidental mismeasurement of serum - Status - Deceased<br>Trial candidate #70 - Although brain activity continues, subject has lost all motor functions - Status - Incapacitated<br>Trial candidate #71 - Has shown increased activity in the brain stem - Status - Healthy<br><br>Progress Report - Human experiments not yet advised, the mortality rate for injection into the brain stem remains high. Spinal injections remain our safest route. The results are predictable but have minimal impact on the subject\'s heightened alacrity.<br><br>And then you feel the bite. Like a trio of power drills moving through the layers of your suit\'s mesh and your shoulderblade. You spin around, diving knife at the ready and see it thrash angrily through a cloud of your own blood. Maybe two meters long, thick as your arm, it disappears into the muck.<br><br> Your engineer checks your back and then plugs an optic cable into the terminal. \"Not in vain,\" she <span id=signLang class=tip>signs</span> and readies her <span id=harpoon class=tip>harpoon gun</span> in case the thing . . .<br><br> Back on the sub your engineer Li is patching you up. \"Sleep on your stomach,\" they say. \"That\'s what I think a doctor would say. Also don\'t move that arm much. Your arm bone\'s collected to your shoulder bone which is connected to your shattered scapula back here.\" They pull out a sling. \"No more dives for a week. Let the kids have all the fun from now on.\"<br><br> Your engineer has already uploaded the data to the sub\'s computer. \"I hope someone really likes this,\" she says. \"Enough to cover your hospital bill at <span id=newBrooklyn class=tip>New Brooklyn</span>.<br><br>Sandy picks up an oinking piglet and perches them on her shoulder. \"And that\'s why I don\'t go on dives.\"<br><br> You return to the pilot\'s room while the engineer wanders off to her bunk for a few hours of sleep.';

const para2_11 = '<br><br> The going is quiet. Sandy checks her instruments regularly but there\'s no movement outside. The computer performs constant checks on the passive SONAR but there\'s not much of substance out in the dark.<br><br> And then the whole submarine lurches to one side. Your head meets a nearby console and there\'s the sharp pain of metal piercing your flesh.<br><br> Sandy has pulled herself back into the navigator\'s chair. \"Fuck,\" she says. \"Holy shit jesus fucking mary and joseph with a goddamned spoon fuck. It\'s big, whatever it is.\"<br><br> The computer alerts you to puncture damage towards the submarine\'s tail. You immediately get an image from the conning tower looking back.<br><br> \"Fuck,\" says Sandy. \"That\'s big. Those teeth are like the size of my whole fucking arm!\"<br><br>You hear the teeth rip away from the bulkhead before you see it on the cam. The thing is in the dark again, but you know it\'ll come around for another pass.';

const para1_12 = 'At least you saw it squirming out before it reached your head. Not quite a lamprey, they only have one head to this thing\'s three. The heads nip at your face all the while the body squirms at the end of your diving knife, held an arm\'s length away. It\'s powerful, a singularly muscular organism designed for tearing the flesh off of other things. You can see its muscles roil beneath the translucent white skin.<br><br> And then it dislodges itself from the knife and heads out through an opening in the structure. Two or three meters long, heads to tail.<br><br> The engineer is looking at you wide eyed through her mask. And then at the terminal. At some point the thing\'s tail must\'ve slammed through the monitor because it\'s shattered, completely black.<br><br> You and the engineer tinker for a little while but with no luck. You start moving through the facility, looking for other terminals but the black box has gone silent. The oxygen monitor on your wrist warns of your impending fate.<br><br> From what you can tell it was a laboratory of some kind. That\'s all you know.<br><br> The crew seems happy your in one piece, but they\'re mostly excited by the piglets. \"They\'ve got such big heads,\" says Sandy. \"I haven\'t seen anything that wasn\'t a cat or a dog in ages, and now I\'m surrounded by farm animals.\"<br><br> \"Hey captain, would you consider your friend back in the installation a cat or a dog?\" says the engineer.<br><br> Sandy picks up an oinking piglet and perches them on her shoulder. \"And that\'s why I don\'t go on dives.\"<br><br> You return to the pilot\'s room while the engineer wanders off to her bunk for a few hours of sleep.';

const para2_12 = para2_11;








// Old Tooltip Functions, Kept for Posterity :P
/*$(document).ready(function(){
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

function harpoon(){
  $('#harpoon').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('Bullet guns common on the surface have been outlawed throughout the Atlantic; harpoons don\'t pose the same risk to habs that a stray bullet does');
  });
  $('#harpoon').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
}

function janus(){
  $('#janus').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('A system using sonic waves to transmit information, similar to radiowaves above water');
  });
  $('#janus').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
}

function war(){
  $('#war').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('The submarine wars of the 40\'s ended national sovereignty in favor of corporate domain');
  });
  $('#war').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
}

function kinerine(){
  $('#kinerine').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('A chemical cocktail that oxidizes the blood and relieves the effects of intense water pressure');
  });
  $('#kinerine').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
}

function signLang(){
  $('#signLang').mouseenter(function(e){
    var mouseX = e.pageX + 5;
    var mouseY = e.pageY;
    $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text('ASL is a common language among divers in the Atlantic who can\'t afford JANUS helmet communicators');
  });
  $('#signLang').mouseleave(function(){
    $('#tooltip').fadeToggle(500);
  });
}
*/
