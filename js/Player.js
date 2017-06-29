function Player (id, name, timer) {
  this.id = id
  this.name = name
  this.timer = timer
  this.board = null
  this.patternAnswear = null
  this.answears = 0
  this.score = 0
  this.played = false
}

Player.prototype.addBoard = function (board) {
  this.board = board
  this.board.player = this
}

Player.prototype.startPlaying = function () {
  this.board.createBoard()
  this.createNewPatternQuestion(this.answears)
}

Player.prototype.createNewPatternQuestion = function (answearsScore) {
  this.board.drawPatternInGrid(answearsScore)
  this.board.removePatternInGrid()
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
  if (this.patternAnswear) {
    this.score += 10
    this.answears++
    this.timer += 5 * 1000

  } else {
    this.timer -= 5 * 1000
  }
  changeScore.call(this)
  return this.patternAnswear
}

Player.prototype.timeUp = function () {
  if (this.timer === 0) {
    return true
  } else {
    return false
  }
}

function changeScore () {
  document.getElementsByClassName('scorer')[0].innerHTML = this.score
}
// module.exports = Player
