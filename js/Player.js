function Player (id, name, timer) {
  this.id = id
  this.name = name
  this.timer = timer
  this.board = null
  this.patternAnswear = null
  this.score = null
}

Player.prototype.addBoard = function (board) {
  this.board = board
  this.board.player = this
}

Player.prototype.startPlaying = function () {
  this.board.createBoard()
  this.createNewPatternQuestion()
}

Player.prototype.createNewPatternQuestion = function () {
  this.board.removePatternInGrid()
  this.board.drawPatternInGrid()
  this.board.removePatternInGrid()
  this.board.addEventListenersToSpots()
}

Player.prototype.answear = function (userPattern) {
  this.board.setUserPattern(userPattern)
  this.patternAnswear = this.board.comparePatterns()
  this.rightAnswear()
  this.board.removeEventListenersToSpots()
  this.board.removeBoard()
  this.startPlaying()
}

Player.prototype.rightAnswear = function () {
  alert(this.patternAnswear)
  if (this.patternAnswear) {
    this.score += 10
    this.timer += 5 * 1000

  } else {
    this.timer -= 5 * 1000
  }
  return this.patternAnswear
}

Player.prototype.timeUp = function () {
  if (this.timer === 0) {
    return true
  } else {
    return false
  }
}


// module.exports = Player
