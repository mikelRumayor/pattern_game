
window.onload = function () {

  var selectedSpot = {}
  var selectedSpotId = 0

  var innerSpotsPointer = document.getElementsByClassName('spot-inner-pointer')
  var innerSpotsPointerArray = Array.prototype.slice.call(innerSpotsPointer)

innerSpotsPointerArray.forEach(function (spot) {

  spot.addEventListener('mouseover', function (e) {
    selectedSpot.x = e.pageX
    selectedSpot.y = e.pageY
    spot.style.opacity = 1

    var line = document.createElement('div')
    line.id = selectedSpotId
    line.style.position = 'absolute'
    line.style.top = e.pageY+'px'
    line.style.left = e.pageX + 'px'
    line.style.width = '100px'
    line.style.height = '2px'
    line.style.border = '1px solid white'
    line.style.background = 'white'
    line.style.border = '1px solid white'
    line.style.pointerEvents = 'none'

    line.style.transformOrigin = '0 0'

    document.body.append(line)
    selectedSpotId++
    spot.style.opacity = 1
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
    console.log('angulo: ' + (180 - angle))
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
