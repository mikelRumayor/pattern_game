function Game (timer) {
  this.timer = timer
  this.playersArray = []
  this.winner = null
  this.turn = null
}

Game.prototype.addPlayer = function (player) {
  this.playersArray.push(player)
}

Game.prototype.initializeGame = function () {
  this.setTurn(this.playersArray[0])
  this.createTimer()
  this.createScorer()
  this.turn.startPlaying()
  this.turn.played = true
  // TODO activte to play
  this.checkTimeUp()
}

Game.prototype.setTurn = function (player) {
  this.turn = player
  alert('turn: ' + this.turn.name)
/*
  this.turn.startPlaying()
  this.turn.played = true
  // TODO activte to play
  this.checkTimeUp()*/
}

Game.prototype.whoseTurn = function (){
  return this.turn.name
}

Game.prototype.switchTurn = function (){
  this.playersArray.forEach(function (player) {
      if(this.turn.name !== player.name) {
        this.turn = player
      }
  }.bind(this))
  alert('turn: ' + this.turn.name)
  this.turn.board.removeBoard()
  this.turn.startPlaying()
  this.turn.played = true
  this.checkTimeUp()
}

Game.prototype.whoWon = function (){
  var winnerScore = 0
  this.playersArray.forEach(function (player) {
      console.log(player.score)
      if(winnerScore <= player.score) {
        alert(player.score)
        winnerScore = player.score
        this.winner = player
      }
  }.bind(this))

  return this.winner.name
}

Game.prototype.createTimer = function () {
  var timerElement = document.createElement('div')
  timerElement.className = 'timer'
  timerElement.innerHTML = this.turn.timer / 1000
  timerElement.style.display = 'inline-block'

  var timeSpan = document.createElement('span')
  timeSpan.innerHTML = 'time:'
  timeSpan.style.fontSize = '24px'
  timeSpan.style.display = 'inline-block'

  var timerContainer = document.createElement('div')
  timerContainer.className = 'timer-container'

  timerContainer.append(timeSpan)
  timerContainer.append(timerElement)

  document.getElementsByTagName('header')[0].append(timerContainer);
}

Game.prototype.createScorer = function () {
  var scorerElement = document.createElement('div')
  scorerElement.className = 'scorer'
  scorerElement.innerHTML = this.turn.score
  scorerElement.style.display = 'inline-block'

  var scorerSpan = document.createElement('span')
  scorerSpan.innerHTML = 'score:  '
  scorerSpan.style.fontSize = '24px'
  scorerSpan.style.display = 'inline-block'

  var scorerContainer = document.createElement('div')
  scorerContainer.className = 'scorer-container'

  scorerContainer.append(scorerSpan)

  scorerContainer.append(scorerElement)

  document.getElementsByTagName('header')[0].append(scorerContainer);

  //document.getElementById('container').insertBefore(scorerContainer, document.getElementById('container').firstChild);
}

Game.prototype.checkTimeUp = function () {
  var timerId = setTimeout(function () {
    this.turn.timer -= 1 * 1000
    if(this.turn.timeUp()) {
      changeTimerValue.call(this)

        alert('switch player')
        clearTimeout(timerId)

        var finnished = this.playersArray.filter(function(player){ return player.played === true }).length === this.playersArray.length ? true : false

        if(finnished){
          alert('The winner is : ' + this.whoWon())
        } else {
          alert('name: ' + this.turn.name)

          alert('score: ' + JSON.stringify(this.turn))
          this.switchTurn()
          changeTimerValue.call(this)
        }
      } else {
        clearTimeout(timerId)
        changeTimerValue.call(this)
        this.checkTimeUp()
      }
  }.bind(this), 1 * 1000)
}

function changeTimerValue () {
  document.getElementsByClassName('timer')[0].innerHTML = this.turn.timer / 1000
}
