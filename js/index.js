
window.onload = function () {

  var spots = document.getElementsByClassName('spot')

  var spotsArray = Array.prototype.slice.call(spots)

  var innerSpotsPointer = document.getElementsByClassName('spot-inner-pointer')
  var innerSpotsPointerArray = Array.prototype.slice.call(innerSpotsPointer)

  spotsArray.forEach(function (spot) {
    spot.addEventListener('mouseover', function (e) {
      var exists = false
      spot.childNodes[1].childNodes.forEach(function(child){

       if(child.className === 'spot-inner-pointer') {
         exists = true
       }
      })
      if (!exists) {
        var pointerDiv = document.createElement('div')
        pointerDiv.className = 'spot-inner-pointer'
        spot.childNodes[1].append(pointerDiv)
        spot.setAttribute('draggable', true)
       }
    })
    spot.addEventListener('mouseleave', function (e) {
      var exists = false
      spot.childNodes[1].childNodes.forEach(function(child){

       if(child.className === 'spot-inner-pointer') {
         child.remove()
       }
      })

    })

  })


  innerSpotsPointerArray.forEach(function (innerSpot) {
    innerSpot.addEventListener('dragstart', function (e) {
      e.dataTransfer.setData('application/node type', this);
    })
  })

  innerSpotsPointerArray.forEach(function (spot) {
    spot.addEventListener('dragstop', function () {
      alert('adios')
    })
  })

}
