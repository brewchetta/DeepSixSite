// Tooltips are bound by locating an element's id ////////////////////////////
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
  deepSix: 'The dangerous stretches of deep ocean between ports of call',
  sixsixsix: 'People who worship the devil as their apocalyptic saviour',
  aGang: 'Submarine mechanics, formally known as machinist\'s mates'
}

// This must be called on every new page load to bind tooltips
function assignTooltips() {
  $('.tip').mouseenter(
    function(e) {
      const mouseX = e.pageX + 5
      const mouseY = e.pageY
      $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text(tooltips[this.id])
    })
  $('.tip').mouseleave(function() {
    $('#tooltip').fadeToggle(500)
  })
};

console.log(`%cTooltips assigned`, 'color: purple')
