var game = new Game(TIMER)
var gameDOM = new GameDOM()
var player1
var player2
var board

window.onload = function () {

  var h2 = document.getElementById('title')
  h2.addEventListener('click' ,createMainMenu)
}

window.addEventListener('mousemove', function(e) {
  var line = document.getElementById(gameDOM.selectedSpotId - 1)

  if(line) {
    createPatternByMouse(e, gameDOM.selectedSpot, line)
  }
}, true);


function createMainMenu () {
  var h2 = document.getElementById('title')
  h2.removeEventListener('click' ,createMainMenu)

  var player1Span = document.createElement('span')
  player1Span.className = 'player-span'
  player1Span.innerHTML = 'player 1:'

  var player1Input = document.createElement('input')
  player1Input.id = 'player1'

  var players1Div = document.createElement('div')
  players1Div.className = 'players'

  players1Div.append(player1Span)
  players1Div.append(player1Input)

  var players2Div = document.createElement('div')
  players2Div.className = 'players'

  var player2Span = document.createElement('span')
  player2Span.className = 'player-span'
  player2Span.innerHTML = 'player 2:'

  var player2Input = document.createElement('input')
  player2Input.id = 'player2'

  players2Div.append(player2Span)
  players2Div.append(player2Input)

  var menuDiv = document.createElement('div')
  menuDiv.className = 'menu'

  menuDiv.append(players1Div)
  menuDiv.append(players2Div)

  document.getElementById('container').append(menuDiv)

  startGame()
}

function startGame () {

  var button = document.createElement('a')
  button.className = 'start-button'
  button.innerHTML = 'start game'
  button.onclick = function (){
    initializeGame()
  }

  var buttonDiv = document.createElement('div')
  buttonDiv.className = 'start'

  buttonDiv.append(button)

  document.getElementById('container').append(buttonDiv)
}

function initializeGame () {
  player1 = new Player(0, document.getElementById('player1').value, TIMER)
  player2 = new Player(1, document.getElementById('player2').value, TIMER)
  board1 = new Board(gameDOM, GRID_WIDTH, GRID_HEIGHT)
  board2 = new Board(gameDOM, GRID_WIDTH, GRID_HEIGHT)

  player1.addBoard(board1)
  player2.addBoard(board2)

  game.addPlayer(player1)
  game.addPlayer(player2)

  document.getElementsByClassName('menu')[0].remove()
  document.getElementsByClassName('start')[0].remove()
  game.initializeGame()
}


/**************************************************************************
*   Trace a line among the selected point in the grid trackcing the mouse *
**************************************************************************/
function createPatternByMouse (event, selectedSpot, line) {
  //Calculate pitagoras to obtain the width of the lines among the ponints
  var width = Math.sqrt((selectedSpot.x - event.pageX) ** 2  +  (selectedSpot.y - event.pageY) ** 2 , 2)
  line.style.width = width + 'px'

  if (selectedSpot.x < event.pageX) {
    //compute the angle of the rotation of the line by trigonometry
    var angle =  Math.atan((selectedSpot.y - event.pageY)/(selectedSpot.x - event.pageX)) * 180/ Math.PI
    line.style.transform = 'rotate(' + angle + 'deg)'
  } else if (selectedSpot.x > event.pageX) {
    //compute the angle of the rotation of the line by trigonometry
    var angle =  -1 * Math.atan((event.pageY - selectedSpot.y)/(event.pageX - selectedSpot.x)) * 180/ Math.PI
    // console.log('angulo: ' + (180 - angle))
    line.style.transform = 'rotate(' + (180 - angle) + 'deg)'
  }
   else {
     if (selectedSpot.y - event.pageY > 0) {
       line.style.transform = 'rotate(' + (-90) + 'deg)'
     } else {
       line.style.transform = 'rotate(' + ( 90) + 'deg)'
     }
   }
}
