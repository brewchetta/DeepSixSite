// The page numbers MUST be in order of their index or everything will be out of sync!!!
const pages = {
  page0: { // This is the page number, correlated with index number
    image: 'Assets/0(NoodleBar).jpg', // This will be the main image
    buttons: { // Adds buttons, their id determines which page they lead to
      1: { image: 'Assets/1(BlueDock).jpg', txt: 'A boring old submarine manifest' },
      2: { image: 'Assets/2(LibertyRuin).jpg', txt: 'A harpoon and wetsuit catalog' },
      3: { image: 'https://i.pinimg.com/236x/8a/f7/09/8af709d3032129b2432ddf07ae4e25d6--cyberpunk-art-cyber-punk.jpg', txt: 'Something ... classified' }
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
      restart: { image: 'Assets/3(Bartender).jpg', txt: 'Back to start' }
    },
    num: 2,
    para: para2,
    variables: {}
  },
  page3: {
    image: 'https://orig00.deviantart.net/f866/f/2016/245/e/e/cyberpunk_bar_by_damnagy-dag7ctt.jpg',
    buttons: {
      7: { image: 'Assets/3(Bartender).jpg', txt: 'Claim ignorance' },
    },
    num: 3,
    para: para3,
    variables: {}
  },
  page4: {
    image: 'Assets/4().jpg',
    buttons: {
      9: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Stop to help' },
    },
    num: 4,
    para: para4,
    variables: { torpedoes: 4 }
  },
  page5: {
    image: 'Assets/666.jpg',
    buttons: {
      9: { image: 'Assets/666.jpg', txt: 'Stop to investigate' },
    },
    num: 5,
    para: para5,
    variables: {}
  },
  page6: {
    image: 'Assets/666.jpg',
    buttons: {
    },
    num: 6,
    para: para6,
    variables: {}
  },
  page7: {
    image: 'Assets/7(Market).jpg',
    buttons: {
      14: { image: 'Assets/7(ImprovisedElectrocute).jpg', txt: 'Confront them' },
      8: { image: 'Assets/7(Market).jpg', txt: 'Lose them' }
    },
    num: 7,
    para: para7,
    variables: {}
  },
  page8: {
    image: 'Assets/8(BlueCorridor).jpg',
    buttons: {
      15: { image: 'Assets/1(BlueDock).jpg', txt: 'Continue' }
    },
    num: 8,
    para: para8,
    variables: {}
  },
  page9: {
    image: 'Assets/9(IndustrialHab).jpg',
    buttons: {
      10: { image: 'Assets/9(IndustrialHab).jpg', txt: 'Dock at the empty moor' },
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
    },
    num: 11,
    para: para11 + para11Two,
    variables: { serumData: 1, wounded: true, damage: 1 }
  },
  page12: {
    image: 'Assets/666.jpg',
    buttons: {
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
  },
  page14: {
    image: 'Assets/7(ImprovisedElectrocute).jpg',
    buttons: {
      15: { image: 'Assets/1(BlueDock).jpg', txt: 'Continue' }
    },
    num: 14,
    para: para14,
    variables: { tailed: true}
  },
  page15: {
    image: 'Assets/1(BlueDock).jpg',
    buttons: {
      16: { image: 'Assets/1(BlueDock).jpg', txt: 'Sneak aboard'}
    },
    num: 15,
    para: para15,
    variables: {}
  },
  page16: {
    image: 'Assets/1(BlueDock).jpg',
    buttons: {
      17: { image: 'https://www.lifewithcats.tv/wp-content/uploads/2012/12/koy.jpg', txt: 'Continue'}
    },
    num: 16,
    para: para16,
    variables: {}
  },
  page17: {
    image: 'Assets/1(BlueDock).jpg',
    buttons: {
      18: { image: '', txt: 'Hack the Terminal'}
    },
    num: 17,
    para: para17,
    variables: { animal: 'tuxedo cat'}
  },
  page18: {
    image: 'Assets/1(BlueDock).jpg',
    buttons: {},
    num: 18,
    para: para18,
    variables: { animal: 'tuxedo cat'}
  }
}

console.log(`%cPage objects built`, 'color: purple')
