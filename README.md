# Deep Six
## A Choose Your Own Adventure

"I'll tell you a story about the Deep Six. The ocean depths. Where submariners risk their lives just find the next port, if the next port still exists. If this thing we call a civilization hasn't been swallowed by the seaweed and the muck."

Deep Six is a dark choose your own adventure story about the last remnants of humanity who fled into the ocean after a catastrophic global flood. It's also a single page application that utilizes Javascript and jQuery to create this dynamic narrative.

## Website


![Deep Six](/Assets/screenshot-page-zero.png)    

https://deep-six.herokuapp.com/index.html

The website for Deep Six is located on Heroku. Heroku often needs a few seconds to reboot if it's been off for a while so please be patient while it loads (the process shouldn't take more than five or ten seconds).

You can also see a brief demo video here: https://youtu.be/Vw93iBp48Xc

## Features

### Single Page Application

I built Deep Six as a single page application using only Javascript and jQuery. The DOM is completely manipulated with every page 'reload' to give the illusion of clicking through the application. This is entirely done in Javascript without the aid of Angular or React.

### Custom CSS

While libraries like Bootstrap exist (and they're amazing!) I take a lot of pride in my own CSS. This website combines CSS with Javascript to create tooltips, custom buttons, and responsive fullscreen support. Additionally I've constructed custom parallax support for the background images.

### Narrative

I've handwritten the narrative and I'm constantly adding to it. At this point the stories are approximately 10% done. Given the nature of branching narratives it'll probably be a while until this project is 'done' but I'm constantly adding new adventures and story paths so check back occasionally for newly written content.

### Local Storage

This website uses local storage to track player progess. With every choice you change a host of hidden statistics in the game that might sweep you to victory or end your life.

Sessions also persist between games. Players can move forward along their narrative paths and quit without losing progress.

## Troubleshooting

While I don't anticipate any issues during the game, bugs happen. You can reset the data on most browsers by going to the Dev Console, the Application tab, and clearing all data from Local Storage stored for the website. Do that and refresh the browser, you'll be good to go!
