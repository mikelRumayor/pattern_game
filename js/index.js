var game = new Game(TIMER);
var gameDOM = new GameDOM();

var player1 = new Player(0, 'Mikel', TIMER)
var player2 = new Player(1, 'Fran', TIMER)

var board = new Board(gameDOM, GRID_WIDTH, GRID_HEIGHT)

window.onload = function () {
  player1.addBoard(board)
  player2.addBoard(board)

  game.addPlayer(player1)
  game.addPlayer(player2)

  game.initializeGame()

  window.addEventListener('mousemove', function(e) {
    var line = document.getElementById(gameDOM.selectedSpotId - 1)

    if(line) {
      createPatternByMouse(e, gameDOM.selectedSpot, line)
    }
  }, true);
}

/*
window.onload = function () {

  var selectedSpot = {}
  var selectedSpotId = 0
  var userPattern = []

  var innerSpotsPointer = document.getElementsByClassName('spot-inner-pointer')
  var innerSpotsPointerArray = Array.prototype.slice.call(innerSpotsPointer)

innerSpotsPointerArray.forEach(function (spot) {
  spot.addEventListener('mouseover', function (e) {
    selectedSpot.x = spot.getBoundingClientRect().left + spot.getBoundingClientRect().width/2
    selectedSpot.y = spot.getBoundingClientRect().top + spot.getBoundingClientRect().height/2
    spot.style.opacity = 1

    createLineBetweenSpots(selectedSpotId, selectedSpot)
    selectedSpotId++
    userPattern.push(spot.getAttribute('pattern-id'))
  })


  spot.addEventListener('click', function (e) {
    document.getElementById(selectedSpotId - 1).remove()
  })

})

  window.addEventListener('mousemove', function(e) {
    var line = document.getElementById(selectedSpotId - 1)

    if(line) {
      createPatternByMouse(e, selectedSpot, line)
    }
  }, true);
}

*/

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
