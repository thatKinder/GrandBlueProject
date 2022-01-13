const containerForGameContainer = document.querySelector('.container-for-a-container')
// const gameContainer = document.querySelector('.game-container')
const Katalina = document.querySelector('.Katalina')
const monster = document.querySelector('.monster')
const restartPrompt = document.querySelector('.restartPrompt')

// const mediaQuery = window.matchMedia('(max-width: 414px)')

let counter = 0
let highScoreTracker = 0
let highScoreActive = false
let startTimerSpeed = 1
//let slashReach = Kposition - 300px
let KatSlash = false
let gameOver = false
let Kposition = Katalina.getBoundingClientRect()
let Mposition = monster.getBoundingClientRect()
let monMove = monster.animate([
  { transform: 'translateX(0px)' },
  { transform: 'translateX(1020px)' }
], {
  // timing options (done in milleseconds)
  duration: 4000,
  iterations: Infinity
});


  function Slash(){
  switch(event.code) {
    case "KeyE":
    case "KeySpace":
    }KatSlash = true
    // console.log(Mposition.right)
    console.log(KatSlash)
    let Mposition = monster.getBoundingClientRect()
    console.log(Mposition.right)
    console.log(Kposition.left)
    if (KatSlash == true && Mposition.right >= Kposition.left - 300 && gameOver == false) {
      monMove.pause()
      //counter = counter += 1
      //monster.blink()
      monMove = monster.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(1020px)' }
        ], {
          // timing options (done in milleseconds)
          duration: 4000,
          iterations: Infinity
        }
    )}}
  // //CURRENT CONUNDRUM
addEventListener("keydown", Slash)


function startInterval(){  
  let timer=setInterval(function(){
  let Mposition = monster.getBoundingClientRect()
  //(for if Kat is hit by monster)
    if(Mposition.right >= Kposition.left) {
        console.log("They touched! They touched!")
        gameOver = true
          console.log("Game Over!")
          clearInterval(timer)
          monMove.pause()
          createGameOver()
      }
  },100)
}

function createGameOver (){
  //const divider = document.createElement('div')
  const GOMessage = document.createElement('h1')
  GOMessage.setAttribute("id", "go-message")
  GOMessage.textContent = "Game Over" 
  GOMessage.style.textAlign = "center"
  const GOSubtitle = document.createElement('p')
  GOSubtitle.setAttribute("id", "go-subtitle")
  GOSubtitle.textContent = "Katalina got hit. Do you want to try again?"
  GOSubtitle.style.textAlign = "center"
  containerForGameContainer.appendChild(GOMessage)
  containerForGameContainer.appendChild(GOSubtitle)


  const startButton = document.createElement("button")
  startButton.classList.add("start-button")
  startButton.innerHTML = "Start Over"
  containerForGameContainer.appendChild(startButton)
  containerForGameContainer.style.Align = "center"
  document.querySelector(".start-button").addEventListener("click", () => {
    RestartPrompt()
  })
  }

  //makes the start over button start the game over (duh!)
  function RestartPrompt() {
    let message = document.querySelector("#go-message")
    let subtitle = document.querySelector("#go-subtitle")
    let restartButton = document.querySelector(".start-button")
    message.remove()
    subtitle.remove()
    restartButton.remove()
    addEventListener("keydown", Slash)
    gameOver = false
    monMove.cancel()
    monMove = monster.animate([
      { transform: 'translateX(0px)' },
      { transform: 'translateX(1020px)' }
    ], {
    // timing options (done in milleseconds)
    duration: 4000,
    iterations: Infinity
    })
    startInterval()
    // monster.style.top="50%"
    // monster.style.left="20%"
    //monMove.play()
}

startInterval()


//-----Score tracker (reference from "Div Jumper"(reference material))-----

// function startScoreTracker() 
// {
// 	const addScore = setInterval(() => 
//     {
// 		const Katalina = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
// 		const monster = parseInt(window.getComputedStyle(monster).getPropertyValue("left"))
// 		if(monster < 50 && monster > 30 && Katalina <= 129 && gameOver === false) {
// 			counter = counter += 1
// 	} 
// 		if(gameOver === true) 
//         {
// 			clearInterval(addScore)
// 		}
// 		score.innerHTML = `Points: ${counter}`
// 	},1)
// }

