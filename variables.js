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
  setEmployer(pageVars)
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

function setEmployer(pageVars) {
  if (pageVars['employer']) {
    const t = pageVars['employer']
    const u = window.localStorage.getItem('employer')
    window.localStorage.setItem('employer', `${t}`)
    console.log(`%cYou are now employed by ${t}`, 'color: orange')
  }
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
const getEmployer = getVar('employer')

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
  window.localStorage.setItem('employer', 'you')
  console.log(`%cemployer set to 'you'`, 'color: orange')
}
