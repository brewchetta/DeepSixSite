// Initial load-up

console.log('%cLoading main script', 'color: blue')

$(document).ready(function() {
  if (!window.localStorage.getItem('pageNum')) { resetVars() }
  resizeWindow()
  if (window.screen.width > 400) {fullscreenBind()}
  const pg = window.localStorage.getItem('pageNum')
  initLoadPage(pages[`page${pg}`])
  $('#tooltip').fadeOut(1)
  assignTooltips()
  bindButtons()
  restartBind()
  bindMouseMove()
})

// Resets window height on main div
function resizeWindow() {
  const winHeight = window.outerHeight
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
    resizeWindow()
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

// Background Shifter on Mousemove
let pagePosLog = false

function bindMouseMove() {
  if (window.screen.width > 400) {
    $('#main').mousemove(function(event) {
      const pageHalfX = Math.floor($('#main').width() / 2)
      const pageHalfY = Math.floor($('#main').height() / 2)
      const distX = ((((event.pageX - pageHalfX) / pageHalfX) * 100) / 6) - (pageHalfX / 2)
      const distY = ((((event.pageY - pageHalfY) / pageHalfY) * 100) / 8) - (pageHalfY / 6)
      $('#main').css('background-position', `${distX}px ${distY}px`)

      // log mouse postion if pagePosLog has been set to true
      if (pagePosLog === true) { console.log(`X: ${event.pageX}px, #MainWidth: ${pageHalfX * 2}px, DistX: ${distX}px`) }
    })
  }
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

// These getVars are mainly for debugging
// Use the constructor for new variables
console.log('%cSetting up getVars', 'color: orange')

function getVar(item) {
  return function() {
    return window.localStorage.getItem(item)
  }
}

const getPage = getVar('pageNum')
const getTorpedoes = getVar('torpedoes')
const getTailed = getVar('tailed')
const getAnimal = getVar('animal')
const getDamage = getVar('damage')
const getWounded = getVar('wounded')
const getSerumData = getVar('serumData')

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
    if (pageVars['torpedoes'] < 0 && t <= pageVars['torpedoes']) {
      alert('Torpedoes negative; TODO: fix this!')
    }
    t += pageVars['torpedoes']
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

console.log('%cFinished loading main script', 'color: purple')
