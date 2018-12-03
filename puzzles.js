// This file contains everything that needs to happen with a puzzle

class Hack {
  constructor(answer, continueButton) {
    this.answer = answer
    this.button = continueButton
  }

  checkAgainstAnswer() {
    this.renderClues()
    if ($('#hacker-input').val() == this.answer) {
      // Some code in here that produces a continue button
    }
  }

  renderClues() {
    const answer = this.answer
    console.log($('#hacker-input').val().length)
    let hackReturn = []
    for (let i = 0; i < $('#hacker-input').val().length; i++) {
      if ($('#hacker-input').val()[i] === answer[i]) {
        hackReturn.push(`<span style='color:cyan'>${$('#hacker-input').val()[i]}</span>`)
      } else {
        hackReturn.push(`<span style='color:grey'>${$('#hacker-input').val()[i]}</span>`)
      }
    }
    $('#hacker-input-processed').html(hackReturn.join(' '))
  }
}

function bindHackerPuzzle(hackInstance) {
  console.log('hackInstance is: ', hackInstance)
  $('#hacker-input').on('input', function() { hackInstance.checkAgainstAnswer() })
}

// Hack puzzle instances

const puzzlePage18 = new Hack('whatever', {19: {image: '', txt: 'Continue'}})
