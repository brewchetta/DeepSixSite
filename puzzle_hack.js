// This file contains everything that needs to happen with a puzzle

// Possible hack answers // Max length of string is 10 characters
const hackAnswers = ['wh4t3v3r', 'l33t', '1337', 'deep6', 'd33ps1x', 'ch3ttrulz', 'sixty9', '60nine', 'subm4r1ne', 'password', 'p4ssw0rd', 'satanrulz']

// Hack puzzle class
class Hack {
  constructor(continueButton) {
    this.answer = hackAnswers.random()
    this.button = continueButton
  }

  checkAgainstAnswer() {
    this.renderClues()
    if ($('#hacker-input').val() == this.answer) {
      $('#hacker-input').off('input')
      loadButtons(this.button)
    }
  }

  renderClues() {
    const answer = this.answer
    let hackReturn = []

    for (let i = 0; i < $('#hacker-input').val().length; i++) {
      if ($('#hacker-input').val().length > answer.length) {
        hackReturn.push(`<span style='color:grey'>_</span>`)
      } else if ($('#hacker-input').val()[i] === answer[i]) {
        hackReturn.push(`<span style='color:cyan'>${$('#hacker-input').val()[i]}</span>`)
      } else {
        hackReturn.push(`<span style='color:grey'>${$('#hacker-input').val()[i]}</span>`)
      }
    }

    $('#hacker-input-processed').html(hackReturn.join(' '))
  }

} // End hack class

function bindHackerPuzzle(hackInstance) {
  $('#hacker-input').on('input', function() { hackInstance.checkAgainstAnswer() })
  console.log(`%cLoaded puzzle`, 'color: green')
}

// Hack puzzle instances

const puzzlePage18 = new Hack({19: {image: 'https://images-cdn.fantasyflightgames.com/filer_public/b9/57/b9576f66-1857-45f7-aa43-bde795d5936f/adn-magnum-opus-preview3.jpg', txt: 'Enter'}})
