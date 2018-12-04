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
  loadPuzzle(page)
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
    $('#main').mousemove(function() {
      const pageHalfX = Math.floor($('#main').width() / 2)
      const pageHalfY = Math.floor($('#main').height() / 2)
      const distX = ((((event.pageX - pageHalfX) / pageHalfX) * 100) / 6) - (pageHalfX / 2)
      const distY = ((((event.pageY - pageHalfY) / pageHalfY) * 100) / 8) - (pageHalfY / 10)
      $('#main').css('background-position', `${distX}px ${distY}px`)

      // log mouse postion if pagePosLog has been set to true
      if (pagePosLog === true) { console.log(`X: ${event.pageX}px, #MainWidth: ${pageHalfX * 2}px, DistX: ${distX}px`) }
    })
  }
}

// //////////////////////////////////////////////////////////////////
// Load Page Functions

function loadPage(page) {
  if (loadPagePathChangeOnVar(page) === true) {
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
    loadPuzzle(page)
    console.log(`%cPage loaded`, 'color: purple')}
}

// This is a lil hacky but it works
function loadPagePathChangeOnVar(page) {
  if (page === pages['page15'] && localStorage['tailed'] == 'true' ) {
    loadPage(pages[`page0`])
    return false
  } else { return true }
}

function loadPuzzle(page) {
  if (page['puzzle']) {
    setTimeout(() => { page['puzzle']() }, 1000)
  } // If the puzzle is loading before the page, make the setTimeout longer
}

function loadButtons(buttons) {
  $('.bContainer').fadeOut(500).delay(500).fadeIn(1500)
  window.setTimeout(function() {
    $('.bContainer').empty()
    for (const key in buttons) {
      const bttn = renderButton(buttons, key)
      $('.bContainer').append(bttn)
      $('.newButton').css('background-image', `url('${buttons[key].image}')`)
      $('.newButton').removeClass('newButton')
      console.log(`%cButton to page ${key} loaded`, 'color: purple')
    }
    bindButtons()
  }, 500)
}

function renderButton(buttons, key) {
  return `<div class="bBox newButton" id=${key}><p>${buttons[key].txt}</p><img src=""></div>`
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
