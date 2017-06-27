function Board (gameDOM, width, height) {
  this.gameDOM = gameDOM
  this.width = width
  this.height = height
  this.pattern = []
  this.userPattern = []
}

Board.prototype.setUserPattern = function (userPattern) {
  this.userPattern = userPattern
}

Board.prototype.comparePatterns = function () {
//   TODO DO LOGIC PART
  this.pattern === this.userPattern ? true : false

}
Board.prototype.generatePattern = function () {
  //var matrix = new Array(this.width).fill(new Array(this.height).fill(false))
  var patternIndexes = []
  var randomElements = Math.floor(Math.random() * (this.width * this.height)) + 1

  var patternElement = Math.floor(Math.random() * (this.width * this.height))
  patternIndexes.push(patternElement)

  for(var i = 0; i <= randomElements - 1; i++) {
    var valid = true
    do{
      patternElement = Math.floor(Math.random() * (this.width * this.height))
      if (patternIndexes.indexOf(patternElement) > -1) {
        valid = false
      } else {

        switch(patternIndexes[i]){
          case 0:
            //console.log(patternIndexes[i])
            //console.log([1, 3, 4, 5, 7].indexOf(patternElement > -1))
            valid  = [1, 3, 4, 5, 7].indexOf(patternElement)  > -1 ? true : false
            break
          case 1:
            //console.log(patternIndexes[i])
            //console.log([0, 2, 3, 4, 5, 6, 8].indexOf(patternElement > -1))
            valid  = [0, 2, 3, 4, 5, 6, 8].indexOf(patternElement) > -1 ? true : false
            break
          case 2:
            //console.log(patternIndexes[i])
            //console.log([1, 3, 4, 5, 7].indexOf(patternElement > -1))
            valid  = [1, 3, 4, 5, 7].indexOf(patternElement) > - 1 ? true : false
            break
          case 3:
            //console.log(patternIndexes[i])
            //console.log([0, 1, 2, 4, 6, 7, 8].indexOf(patternElement > -1))
            valid  = [0, 1, 2, 4, 6, 7, 8].indexOf(patternElement) > - 1 ? true : false
            break
          case 4:
            //console.log(patternIndexes[i])
            //console.log([0, 1, 2, 3, 5 ,6 ,7 ,8].indexOf(patternElement > -1))
            valid  = [0, 1, 2, 3, 5 ,6 ,7 ,8].indexOf(patternElement) > - 1 ? true : false
            break
          case 5:
            //console.log(patternIndexes[i])
            //console.log([0, 1, 2, 4, 6, 7, 8].indexOf(patternElement > -1))
            valid  = [0, 1, 2, 4, 6, 7, 8].indexOf(patternElement) > - 1 ? true : false
            break
          case 6:
            //console.log(patternIndexes[i])
            //console.log([1, 3, 4, 5, 7].indexOf(patternElement > -1))
            valid  = [1, 3, 4, 5, 7].indexOf(patternElement) > - 1 ? true : false
            break
          case 7:
            //console.log(patternIndexes[i])
            //console.log([0, 2, 3, 4, 5, 6, 8].indexOf(patternElement > -1))
            valid  = [0, 2, 3, 4, 5, 6, 8].indexOf(patternElement) > -1 ? true : false
            break
          case 8:
            //console.log(patternIndexes[i])
            //console.log([1, 3, 4, 5, 7].indexOf(patternElement > -1))
            valid  = [1, 3, 4, 5, 7].indexOf(patternElement)  > -1 ? true : false
            break
        }
      }
      // console.log(valid)
    } while(valid === false)
    patternIndexes.push(patternElement)
  }
  this.pattern = patternIndexes
  console.log(this.pattern)

}

Board.prototype.drawPatternInGrid = function () {
  this.generatePattern()

  // this.pattern = [0, 4, 1]
  console.log(this.pattern)
  this.pattern.map(function (pointer, i) {
    document.querySelectorAll('div[attr-id]')[pointer].style.opacity = 1
    if (i < this.pattern.length - 1 ) {
      console.log( document.querySelectorAll('div[attr-id]')[pointer])
      console.log( document.querySelectorAll('div[attr-id]')[this.pattern[i + 1]])
      createLineBetweenSpots(i, {x: document.querySelectorAll('div[attr-id]')[pointer].getBoundingClientRect().left + 6, y: document.querySelectorAll('div[attr-id]')[pointer].getBoundingClientRect().top + 5})
      rotateLineBetweenSpots(i, {x: document.querySelectorAll('div[attr-id]')[pointer].getBoundingClientRect().left + 6, y: document.querySelectorAll('div[attr-id]')[pointer].getBoundingClientRect().top + 5}, {x: document.querySelectorAll('div[attr-id]')[this.pattern[i + 1]].getBoundingClientRect().left + 6, y: document.querySelectorAll('div[attr-id]')[this.pattern[i + 1]].getBoundingClientRect().top + 5})
    }
  }.bind(this))
}


Board.prototype.removePatternInGrid = function () {

  setTimeout(function(){
    var linesArray = Array.prototype.slice.call(document.querySelectorAll('div.line'))
    linesArray.map(function(line){
      line.remove()
    })

  }.bind(this), 4 * 1000)
}


Board.prototype.checkLimits = function (i, j) {


}
Board.prototype.generateQueryPattern = function () {

}
/*********************************************************
*       Create grid dynamically                          *
**********************************************************/
Board.prototype.createBoard = function() {

  var flexRow = document. createElement('div')
  flexRow.className = 'flex-row'

  for(var i = 0; i < this.width; i++) {

    var flexColumn = document. createElement('div')
    flexColumn.className = 'flex-column'

    for(var j = 0; j < this.width; j++) {

      var spotInnerPointer = document. createElement('div')
      spotInnerPointer.setAttribute('attr-id' ,(i + 1) * (j + 1) - 1)

      spotInnerPointer.className = 'spot-inner-pointer'
      spotInnerPointer.onclick = function () {
        document.getElementById(this.gameDOM.selectedSpotId - 1).remove()
        console.log(this.userPattern)
      }.bind(this)

      spotInnerPointer.onmouseover = function (e) {
      /*  this.gameDOM.selectedSpot.x = spotInnerPointer.getBoundingClientRect().left + spotInnerPointer.getBoundingClientRect().width / 2
        this.gameDOM.selectedSpot.y = spotInnerPointer.getBoundingClientRect().top + spotInnerPointer.getBoundingClientRect().height / 2
*/
        this.gameDOM.selectedSpot.x = e.pageX + spotInnerPointer.getBoundingClientRect().width / 2
        this.gameDOM.selectedSpot.y = e.pageY + spotInnerPointer.getBoundingClientRect().height / 2
        console.log(spotInnerPointer.style)
        // TODO check what happends with the reference of the object
        spotInnerPointer.style.opacity = 1

        createLineBetweenSpots(this.gameDOM.selectedSpotId, this.gameDOM.selectedSpot)
        this.gameDOM.selectedSpotId++
        this.userPattern.push(spotInnerPointer.getAttribute('attr-id'))
      }.bind(this)

      var spotInner = document. createElement('div')
      spotInner.className = 'spot-inner'

      spotInner.append(spotInnerPointer)

      spotInnerPointer = null

      var spot = document. createElement('div')
      spot.className = 'spot'

      spot.append(spotInner)

      var spotContainer = document. createElement('div')
      spotContainer.className = 'spot-container'

      spotContainer.append(spot)
      flexColumn.append(spotContainer)
    }
    flexRow.append(flexColumn)
  }
  var patternContainer = document. createElement('div')
  patternContainer.className = 'pattern-container'

  patternContainer.append(flexRow)

  var container = document.getElementById('container')
  container.append(patternContainer)

}


Board.prototype.removeBoard = function() {

}

/************************************************************************
*   Create line to join the dots and create the pattern                 *
/***********************************************************************/
function createLineBetweenSpots (selectedSpotId, selectedSpot) {
  var line = document.createElement('div')
  line.id = selectedSpotId
  line.className  = 'line'
  line.style.position = 'absolute'
  line.style.top = selectedSpot.y + 'px'
  line.style.left = selectedSpot.x + 'px'
  line.style.width = '100px'
  line.style.height = '2px'
  line.style.border = '1px solid white'
  line.style.background = 'white'
  line.style.border = '1px solid white'
  line.style.pointerEvents = 'none'

  line.style.transformOrigin = '0 0'

  document.body.append(line)
}

/************************************************************************
*   Create line to join the dots and create the pattern                 *
/***********************************************************************/
function rotateLineBetweenSpots (id, origin, target) {


  //Calculate pitagoras to obtain the width of the lines among the ponints
  var width = Math.sqrt((origin.x - target.x) ** 2  +  (origin.y - target.y) ** 2 , 2)
  var line = document.getElementById(id)
  line.style.width = width + 'px'

  if (origin.x < target.x) {
    //compute the angle of the rotation of the line by trigonometry
    var angle =  Math.atan((origin.y - target.y)/(origin.x - target.x)) * 180/ Math.PI
    line.style.transform = 'rotate(' + angle + 'deg)'
  } else if (origin.x > target.x) {
    console.log(origin.x)
    console.log(target.x)

    //compute the angle of the rotation of the line by trigonometry
    var angle =  -1 * Math.atan((target.y - origin.y)/(target.x - origin.x)) * 180/ Math.PI
    console.log('angulo: ' + (180 - angle))
    line.style.transform = 'rotate(' + (180 - angle) + 'deg)'
  }
   else {
     if (origin.y - target.y > 0) {
       line.style.transform = 'rotate(' + (-90) + 'deg)'
     } else {
       line.style.transform = 'rotate(' + ( 90) + 'deg)'
     }
   }

}


// module.exports = Board
