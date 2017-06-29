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

  this.board.pattern.map(function (pointer, i) {
    document.querySelectorAll('div[attr-id]')[pointer].style.opacity = 1
    blinkSpotAndLines(pointer, this.patternAnswear ? 'good-pattern': 'bad-pattern')
    if (!this.patternAnswear) {
      document.querySelectorAll('div[attr-id]')[pointer].style.opacity = 1
      blinkSpotAndLines(pointer, 'showing-pattern')
      if (i < this.board.pattern.length - 1 ) {
        createLineBetweenSpots('good' + i, {x: document.querySelectorAll('div[attr-id]')[pointer].getBoundingClientRect().left + 6, y: document.querySelectorAll('div[attr-id]')[pointer].getBoundingClientRect().top + 5})
        rotateLineBetweenSpots('good' + i, {x: document.querySelectorAll('div[attr-id]')[pointer].getBoundingClientRect().left + 6, y: document.querySelectorAll('div[attr-id]')[pointer].getBoundingClientRect().top + 5}, {x: document.querySelectorAll('div[attr-id]')[this.board.pattern[i + 1]].getBoundingClientRect().left + 6, y: document.querySelectorAll('div[attr-id]')[this.board.pattern[i + 1]].getBoundingClientRect().top + 5})
      }
    }
  }.bind(this))

  var cont = 2
  var intervalId = setInterval(function() {
    if (!cont) {
      clearInterval(intervalId)
      this.board.removeBoard()
      this.startPlaying()
    }
    cont--

  }.bind(this), 1 * 1000)
  /*
  this.board.removeBoard()
  this.startPlaying()*/
}

Player.prototype.rightAnswear = function () {
  if (this.patternAnswear) {
    this.score += 10
    this.answears++
    this.timer += 10 * 1000
  } else {
    // this.timer -= 5 * 1000
  }
  changeScore.call(this)

  console.log('time changed:', this.timer)
}

Player.prototype.timeUp = function () {
  if (this.timer <= 0) {
    return true
  } else {
    return false
  }
}

function changeScore () {
  document.getElementsByClassName('scorer')[0].innerHTML = this.score
}
// module.exports = Player
