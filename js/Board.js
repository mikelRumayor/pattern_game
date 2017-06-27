function Board (width, height) {
  this.width = width
  this.height = height
  this.pattern = []
  this.userPattern = []
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

Board.prototype.checkLimits = function (i, j) {


}
Board.prototype.generateQueryPattern = function () {

}

module.exports = Board
