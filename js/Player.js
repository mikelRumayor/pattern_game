function Player (id, name, timer) {
  this.id = id
  this.name = name
  this.timer = timer
  this.board = null
  this.patternAnswer = null
  this.score = 0
}

Player.prototype.addBoard = function (board) {
  this.board = board
}

Player.prototype.answear = function () {

}

Player.prototype.rightAnswear = function () {
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


module.exports = Player
