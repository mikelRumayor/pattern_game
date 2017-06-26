function Board (width, height) {
  this.width = width
  this.height = height
  this.pattern = []
  this.userPattern = []
}

Board.prototype.generatePattern = function () {
  //var matrix = new Array(this.width).fill(new Array(this.height).fill(false))
  console.log(matrix)


  var firstElement = Math.floor(Math.random() * (this.width * this.height))

  if(firstElement === 0 || firstElement === this.width * this.height) {

  } else {
     if (firstElement + 1 /this.width === 0) {
       Math.round(firstElement + 1 / this.width)
     }
  }

/*  Array.apply(null, Array(Math.floor(Math.random() * (width))).map(function(item, index){

      return Math.floor(Math.random() * 9);
  });*/

  Math.floor(Math.random() * (width))

}

Board.prototype.checkLimits = function (i, j) {


}
Board.prototype.generateQueryPattern = function () {

}

module.exports = Board
