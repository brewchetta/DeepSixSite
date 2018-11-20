// Initial load-up

console.log('%cLoading main script', 'color: blue')

$(document).ready(function() {
  if (!window.localStorage.getItem('pageNum')) { resetVars() }
  resizeWindow()
  fullscreenBind()
  const pg = window.localStorage.getItem('pageNum')
  initLoadPage(pages[`page${pg}`])
  $('#tooltip').fadeOut(1)
  assignTooltips()
  bindButtons()
  restartBind()
})

// Resets window height on main div
function resizeWindow() {
  const winHeight = window.innerHeight
  $('#main').css('height', `${winHeight}`)
}

function initLoadPage (page) {
  $('#bannerDiv').fadeOut(1, function() { scrollTo(0, 0) }).fadeIn(1500)
  $('.disclaimer').fadeOut(1).fadeIn(1500)
  $('#main').fadeOut(1, function() {
    $(this).css('background-image', `url('${page.image}')`)
  }).fadeIn(1500)
  $('footer').fadeOut(1).delay(1000).fadeIn(3000)
  resizeWindow()
  $('#para').fadeOut(1, function() {
    $(this).html(page.para); assignTooltips()
  }).delay(500).fadeIn(3000)
  loadButtons(page.buttons)
};

// Restart function
function restartBind () {
  $('#restart').click(function () {
    resetVars()
    loadPage(pages['page0'])
  });
}

// Fullscreen Functions
function fullscreenBind() {
  $('#fullscreen').click(function fullscreen() {
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
    console.log('%cFullscreen Enabled', 'color: green')
  })
  $('#exitFullscreen').click(function exitFullscreen() {
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
    console.log('%cFullscreen Disabled', 'color: green')
  })
}

// Variables that might affect the story are stored here
function resetVars() {
  window.localStorage.setItem('pageNum', 0)
  console.log(`%cpageNum set to 0`, 'color: orange')
  window.localStorage.setItem('torpedoes', 0)
  console.log(`%ctorpedoes set to 0`, 'color: orange')
  window.localStorage.setItem('tailed', false)
  console.log(`%ctailed set to false`, 'color: orange')
  window.localStorage.setItem('animal', 'nothing')
  console.log(`%canimal set to 'nothing'`, 'color: orange')
  window.localStorage.setItem('damage', 0)
  console.log(`%cdamage set to 0`, 'color: orange')
  window.localStorage.setItem('wounded', false)
  console.log(`%cwounded set to false`, 'color: orange')
  window.localStorage.setItem('serumData', 0)
  console.log(`%cserumData set to 0`, 'color: orange')
}

//   pageNum: 0,
//   torpedoes: 0,
//   tailed: false,
//   animal: 'solitary thoughts',
//   damage: 0,
//   wounded: false,
//   serumData: 0

// //////////////////////////////////////////////////////////////////
// Load Page Functions

function loadPage(page) {
  console.log(`%cPage loading`, 'color: blue')
  loadTransition()
  $('#main').fadeOut(500, function() {
    $(this).css('background-image', `url('${page.image}')`)
  }).fadeIn(500)
  $('footer').fadeOut(500).delay(1000).fadeIn(500)
  $('#para').fadeOut(500, function() {
    $(this).html(page.para); assignTooltips()
  }).delay(500).fadeIn(1500)
  varChange(page)
  loadButtons(page.buttons)
  console.log(`%cPage loaded`, 'color: purple')
}

// Changes variables in localStorage, called in loadPage
function varChange(page) {
  const pageVars = page.variables
  setPage(page['num'])
  setTorps(pageVars)
  setTailed(pageVars)
  setAnimal(pageVars)
  setDmg(pageVars)
  setWounded(pageVars)
  setSerum(pageVars)
}

function setPage(num) {
  window.localStorage.setItem('pageNum', `${num}`)
  console.log(`%cpageNum is now ${num}`, 'color: orange')
}

function setTorps(pageVars) {
  if (pageVars['torpedoes']) {
    let t = window.localStorage.getItem('torpedoes')
    t = parseInt(t)
    (t >= pageVars['torpedoes']) ? t += pageVars['torpedoes'] : alert('Torpedoes negative; TODO: fix this!')
    window.localStorage.setItem('torpedoes', `${t}`)
    console.log(`%cTorpedoes += ${t}`, 'color: orange')
  }
}

function setTailed(pageVars) {
  if (pageVars['tailed']) {
    const t = pageVars['tailed']
    window.localStorage.setItem('tailed', `${t}`)
    console.log(`%cTail = ${t}`, 'color: orange')
  }
}

function setAnimal(pageVars) {
  if (pageVars['animal']) {
    const t = pageVars['animal']
    const u = window.localStorage.getItem('animal')
    if (u === 'nothing') {
      window.localStorage.setItem('animal', `${t}`)
      console.log(`%cA ${t} is now following as your animal`, 'color: orange')
    } else {
      console.log(`%cCouldn't adopt a ${t} since you already have a ${u}, mama says so`, 'color: orange')
    }
  }
}

function setDmg(pageVars) {
  if (pageVars['damage']) {
    let t = window.localStorage.getItem('damage')
    t = parseInt(t)
    t += pageVars['damage']
    if (t < 0) { t = 0 } // Can't be below 0
    window.localStorage.setItem('damage', `${t}`)
    console.log(`%cDamage has changed to ${t}`, 'color: orange')
  }
}

function setWounded(pageVars) {
  if (pageVars['wounded']) {
    const t = pageVars['wounded']
    if (t === false && t === window.localStorage.getItem('wounded')) {
      alert('Character dead; TODO: figure out death logic')
    } else {
      window.localStorage.setItem('wounded', `${t}`)
      console.log(`%cWounded = ${t}`, 'color: orange')
    }
  }
}

function setSerum(pageVars) {
  if (pageVars['serumData']) {
    let t = window.localStorage.getItem('serumData')
    t = parseInt(t)
    t += pageVars['serumData']
    if (t < 0) { t = 0 } // Can't be below 0
    window.localStorage.setItem('serumData', `${t}`)
    console.log(`%cSerum has changed to ${t}`, 'color: orange')
  }
}
// /// End localStorage functions /// //

function loadButtons(buttons) {
  $('.bContainer').fadeOut(500).delay(500).fadeIn(1500)
  window.setTimeout(function() {
    $('.bContainer').empty()
    for (const key in buttons) {
      var bttn = '<div class="bBox newButton"><p></p><img src=""></div>'
      $('.bContainer').append(bttn)
      $('.newButton').children('p').text(buttons[key].txt)
      $('.newButton').attr('id', key)
      $('.newButton').css('background-image', `url('${buttons[key].image}')`)
      $('.newButton').removeClass('newButton')
      console.log(`%cButton to page ${key} loaded`, 'color: purple')
    }
    bindButtons()
  }, 500)
}

function loadTransition() {
  $('#bannerDiv').fadeOut(500, function() { scrollTo(0, 0) }).fadeIn(500)
  $('.disclaimer').fadeOut(500).fadeIn(500)
}

function bindButtons() {
  $('.bBox').click(function() {
    window.localStorage.setItem(`pageNum`, Number(this.id))
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
  console.log(`%cTooltips assigned`, 'color: purple')
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
    num: 0,
    para: para0, // The text that will be displayed
    variables: {} // How variables will change
  },
  page1: {
    image: 'Assets/1(BlueDock).jpg',
    buttons: {
      4: { image: 'Assets/1(GoatSkull).jpg', txt: 'Fine, just fine, you\'ll wait' },
      5: { image: 'Assets/1(GoatSkull).jpg', txt: 'Keep to your schedule' },
      6: { image: 'Assets/1(GoatSkull).jpg', txt: 'You\'ll wait, but only if you get a discount' }
    },
    num: 1,
    para: para1,
    variables: {}
  },
  page2: {
    image: 'Asssets/2(LibertyRuin).jpg',
    buttons: {
      666: { image: 'Assets/2(BlueEye).jpg', txt: 'Why not? Let\'s find a sub headed that way!' },
      667: { image: 'Assets/2(BlueEye).jpg', txt: 'She\'d just slow you down' }
    },
    num: 2,
    para: para2,
    variables: {}
  },
  page3: {
    image: 'Assets/3(Bartender).jpg',
    buttons: {
      7: { image: 'Assets/3(Bartender).jpg', txt: 'Claim ignorance' },
      666: { image: 'Assets/3(Bartender).jpg', txt: 'Tell them what you know' }
    },
    num: 3,
    para: para3,
    variables: {}
  },
  page4: {
    image: 'Assets/4().jpg',
    buttons: {
      9: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Stop to help' },
      666: { image: 'Assets/1(GoatSkull).jpg', txt: 'Let\'s go way around' },
    },
    num: 4,
    para: para4,
    variables: { torpedoes: 4 }
  },
  page5: {
    image: 'Assets/666.jpg',
    buttons: {
      9: { image: 'Assets/666.jpg', txt: 'Stop to investigate' },
      666: { image: 'Assets/666.jpg', txt: 'Nope, let\'s go around it' }
    },
    num: 5,
    para: para5,
    variables: {}
  },
  page6: {
    image: 'Assets/666.jpg',
    buttons: {
      666: { image: 'Assets/666.jpg', txt: 'Outrun them!' },
      666: { image: 'Assets/', txt: 'Ram them!' },
      666: { image: 'Assets/', txt: 'Send an SOS!' }
    },
    num: 6,
    para: para6,
    variables: {}
  },
  page7: {
    image: 'Assets/7(Market).jpg',
    buttons: {
      666: { image: 'Assets/7(ImprovisedElectrocute).jpg', txt: 'Confront them' },
      8: { image: 'Assets/7(Market).jpg', txt: 'Lose them' }
    },
    num: 7,
    para: para7,
    variables: {}
  },
  page8: {
    image: 'Assets/8(BlueCorridor).jpg',
    buttons: {
      666: { image: 'Assets/8(BlueCorridor).jpg', txt: 'Sneak on board' },
      667: { image: 'Assets/8(BlueCorridor).jpg', txt: 'Take out the guards' },
      668: { image: 'Assets/8(BlueCorridor).jpg', txt: 'Impersonate a high ranking official and board' }
    },
    num: 8,
    para: para8,
    variables: {}
  },
  page9: {
    image: 'Assets/9(IndustrialHab).jpg',
    buttons: {
      10: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Dock at the empty moor' },
      666: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Nope nope nope, you\'re leaving' }
    },
    num: 9,
    para: para9,
    variables: {}
  },
  page10: {
    image: 'Assets/10(Cryo).jpg',
    buttons: {
      13: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Continue' }
    },
    num: 10,
    para: para10,
    variables: { animal: 'brood of piglets' }
  },
  page11: {
    image: 'Assets/666.jpg',
    buttons: {
      666: { image: 'Assets/666.jpg', txt: 'Try and escape!' },
      667: { image: 'Assets/666.jpg', txt: 'Fire torpedo!' }
    },
    num: 11,
    para: para11 + para11Two,
    variables: { serumData: 1, wounded: true, damage: 1 }
  },
  page12: {
    image: 'Assets/666.jpg',
    buttons: {
      666: { image: 'Assets/666.jpg', txt: 'Try and escape!' },
      667: { image: 'Assets/666.jpg', txt: 'Fire torpedo!' }
    },
    num: 12,
    para: para12 + para12Two,
    variables: { damage: 1 }
  },
  page13: {
    image: 'Assets/10(Cryo).jpg',
    buttons: {
      11: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Time for some light reading' },
      12: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Have a look around first' }
    },
    num: 13,
    para: para13,
    variables: { animal: 'brood of piglets' }
  }
}

console.log('%cFinished loading main script', 'color: purple')
