// Initial load-up

console.log('%cLoading main script', 'color: blue')

$(document).ready(function () {
  resizeWindow()
  fullscreenBind()
  initLoadPage(pages['page0'])
  $('#tooltip').fadeOut(1)
  assignTooltips()
  bindButtons()
  restartBind()
})

// Resets window height on main div
function resizeWindow () {
  let winHeight = window.innerHeight
  $('#main').css('height', `${winHeight}`)
}

function initLoadPage (page) {
  $('#bannerDiv').fadeOut(1, function () { scrollTo(0, 0) }).fadeIn(1500)
  $('.disclaimer').fadeOut(1).fadeIn(1500)
  $('#main').fadeOut(1, function () { $(this).css('background-image', `url('${page.image}')`) }).fadeIn(1500)
  $('footer').fadeOut(1).delay(1000).fadeIn(3000)
  resizeWindow()
  $('#para1').fadeOut(1, function () { $(this).html(page.para); assignTooltips() }).delay(500).fadeIn(3000)
  loadButtons(page.buttons)
};

// Restart function
function restartBind () {
  $('#restart').click(function () {
    variables.pageNum = 0
    variables.torpedoes = 0
    variables.tailed = false
    variables.animal = 'solitary thoughts'
    variables.damage = 0
    variables.wounded = false
    variables.serumData = 0
    loadPage(pages['page0'])
  });
}

// Fullscreen Functions
function fullscreenBind () {
  $('#fullscreen').click(function fullscreen () {
    var docElm = document.documentElement
    screenFull = true
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen()
    } else if (docElm.msRequestFullscreen) {
      docElm = document.body
      docElm.msRequestFullscreen()
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen()
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen()
    }
  })
  $('#exitFullscreen').click(function exitFullscreen () {
    screenFull = false
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen()
    }
  })
}

// Variables that might affect the story are stored here
// (Possibly change to an object to condense it?)

let variables = {
  pageNum: 0,
  torpedoes: 0,
  tailed: false,
  animal: 'solitary thoughts',
  damage: 0,
  wounded: false,
  serumData: 0
}

// //////////////////////////////////////////////////////////////////
// Load Page Functions

function loadPage (page) {
  loadTransition()
  $('#main').fadeOut(500, function () { $(this).css('background-image', `url('${page.image}')`) }).fadeIn(500)
  $('footer').fadeOut(500).delay(1000).fadeIn(500)
  $('#para1').fadeOut(500, function () { $(this).html(page.para); assignTooltips() }).delay(500).fadeIn(1500)
  loadButtons(page.buttons)
};

function loadButtons (buttons) {
  $('.bContainer').fadeOut(500).delay(500).fadeIn(1500)
  window.setTimeout(function () {
    $('.bContainer').empty()
    for (var key in buttons) {
      var bttn = '<div class="bBox newButton"><p></p><img src=""></div>'
      $('.bContainer').append(bttn)
      $('.newButton').children('p').text(buttons[key].txt)
      $('.newButton').attr('id', key)
      $('.newButton').css('background-image', `url('${buttons[key].image}')`)
      $('.newButton').removeClass('newButton')
    }
    bindButtons()
  }, 500)
}

function loadTransition () {
  $('#bannerDiv').fadeOut(500, function () { scrollTo(0, 0) }).fadeIn(500)
  $('.disclaimer').fadeOut(500).fadeIn(500)
}

function bindButtons () {
  $('.bBox').click(function () {
    variables.pageNum = Number(this.id)
    loadPage(pages['page' + this.id])
  })
}

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
  deepSix: 'The dangerous stretches of ocean between ports of call',
  sixsixsix: 'People who worship the devil as their apocalyptic saviour',
  aGang: 'Submarine mechanics, formally known as machinist\'s mates'
}

// This must be called on every new page load to bind tooltips
function assignTooltips () {
  $('.tip').mouseenter(
    function (e) {
      var mouseX = e.pageX + 5
      var mouseY = e.pageY
      $('#tooltip').css({ top: mouseY, left: mouseX }).fadeToggle(500).text(tooltips[this.id])
    })
  $('.tip').mouseleave(function () {
    $('#tooltip').fadeToggle(500)
  })
};

// The page numbers MUST be in order of their index or everything will be out of sync!!!
const pages = {
  page0: { // This is the page number, correlated with index number
    image: 'Assets/0(NoodleBar).jpg', // This will be the main image
    buttons: { // Adds buttons, their id determines which page they lead to
      1: { image: 'Assets/0(NoodleBar).jpg', txt: 'A boring old submarine manifest' },
      2: { image: 'Assets/0(NoodleBar).jpg', txt: 'A harpoon and wetsuit catalog' },
      3: { image: 'Assets/0(NoodleBar).jpg', txt: 'Something ... classified' }
    },
    para: para1_0, // The text that will be displayed
    variables: {} // How variables will change
  },
  page1: {
    image: 'Assets/1(BlueDock).jpg',
    buttons: {
      4: { image: 'Assets/1(GoatSkull).jpg', txt: 'Fine, just fine, you\'ll wait' },
      5: { image: 'Assets/1(GoatSkull).jpg', txt: 'Keep to your schedule' },
      6: { image: 'Assets/1(GoatSkull).jpg', txt: 'You\'ll wait, but only if you get a discount' }
    },
    para: para1_1,
    variables: {}
  },
  page2: {
    image: 'Asssets/2(LibertyRuin).jpg',
    buttons: {
      666: { image: 'Assets/2(BlueEye).jpg', txt: 'Why not? Let\'s find a sub headed that way!' },
      667: { image: 'Assets/2(BlueEye).jpg', txt: 'She\'d just slow you down' }
    },
    para: para1_2,
    variables: {}
  },
  page3: {
    image: 'Assets/3(Bartender).jpg',
    buttons: {
      7: { image: 'Assets/3(Bartender).jpg', txt: 'Claim ignorance' },
      666: { image: 'Assets/3(Bartender).jpg', txt: 'Tell them what you know' }
    },
    para: para1_3,
    variables: {}
  },
  page4: {
    image: 'Assets/4().jpg',
    buttons: {
      9: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Stop to help' },
      666: { image: 'Assets/1(GoatSkull).jpg', txt: 'Let\'s go way around' },
    },
    para: para1_4,
    variables: { torpedoes: 4 }
  },
  page5: {
    image: 'Assets/666.jpg',
    buttons: {
      9: { image: 'Assets/666.jpg', txt: 'Stop to investigate' },
      666: { image: 'Assets/666.jpg', txt: 'Nope, let\'s go around it' }
    },
    para: para1_5,
    variables: {}
  },
  page6: {
    image: 'Assets/666.jpg',
    buttons: {
      666: { image: 'Assets/666.jpg', txt: 'Outrun them!' },
      666: { image: 'Assets/', txt: 'Ram them!' },
      666: { image: 'Assets/', txt: 'Send an SOS!' }
    },
    para: para1_6 + para2_6,
    variables: {}
  },
  page7: {
    image: 'Assets/7(Market).jpg',
    buttons: {
      666: { image: 'Assets/7(ImprovisedElectrocute).jpg', txt: 'Confront them' },
      8: { image: 'Assets/7(Market).jpg', txt: 'Lose them' }
    },
    para: para1_7,
    variables: {}
  },
  page8: {
    image: 'Assets/8(BlueCorridor).jpg',
    buttons: {
      666: { image: 'Assets/8(BlueCorridor).jpg', txt: 'Sneak on board' },
      667: { image: 'Assets/8(BlueCorridor).jpg', txt: 'Take out the guards' },
      668: { image: 'Assets/8(BlueCorridor).jpg', txt: 'Impersonate a high ranking official and board' }
    },
    para: para1_8,
    variables: {}
  },
  page9: {
    image: 'Assets/9(IndustrialHab).jpg',
    buttons: {
      10: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Dock at the empty moor' },
      666: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Nope nope nope, you\'re leaving' }
    },
    para: para1_9,
    variables: {}
  },
  page10: {
    image: 'Assets/10(Cryo).jpg',
    buttons: {
      13: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Continue' }
    },
    para: para1_10,
    variables: { animal: 'piglets' }
  },
  page11: {
    image: 'Assets/666.jpg',
    buttons: {
      666: { image: 'Assets/666.jpg', txt: 'Try and escape!' },
      667: { image: 'Assets/666.jpg', txt: 'Fire torpedo!' }
    },
    para: para1_11 + para2_11,
    variables: { serumData: 1, wounded: true, damage: 1 }
  },
  page12: {
    image: 'Assets/666.jpg',
    buttons: {
      666: { image: 'Assets/666.jpg', txt: 'Try and escape!' },
      667: { image: 'Assets/666.jpg', txt: 'Fire torpedo!' }
    },
    para: para1_12 + para2_12,
    variables: { damage: 1 }
  },
  page13: {
    image: 'Assets/10(Cryo).jpg',
    buttons: {
      11: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Time for some light reading' },
      12: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Have a look around first' }
    },
    para: para1_13,
    variables: { animal: 'piglets' }
  }
}

console.log('%cFinished loading main script', 'color: purple')
