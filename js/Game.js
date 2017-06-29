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
  this.configureToStartPlaying()
}

Game.prototype.setTurn = function (player) {
  this.turn = player

  renderPlayer.call(this)
}

Game.prototype.whoseTurn = function (){
  return this.turn.name
}

Game.prototype.configureToStartPlaying = function () {
  this.turn.startPlaying()
  this.turn.played = true

  // TODO activte to play
  this.checkTimeUp()
}

Game.prototype.switchTurn = function (){
  this.playersArray.forEach(function (player) {
      if(this.turn.name !== player.name) {
        this.turn = player
      }
  }.bind(this))
  this.turn.board.removeBoard()
  this.clearAllScorerTimeRender()
}

Game.prototype.whoWon = function (){
  var winnerScore = 0
  this.playersArray.forEach(function (player) {
      console.log(player.score)
      if(winnerScore <= player.score) {
        winnerScore = player.score
        this.winner = player
      }
  }.bind(this))

  return this.winner.name
}

Game.prototype.checkTimeUp = function () {
  var timerId = setTimeout(function () {
    this.turn.timer -= 1 * 1000
    if(this.turn.timeUp()) {
      changeTimerValue.call(this)

        clearTimeout(timerId)

        var finnished = this.playersArray.filter(function(player){ return player.played === true }).length === this.playersArray.length ? true : false

        if(finnished){
          this.whoWon()
          renderWinner.call(this)
        } else {
          this.switchTurn()
          this.turn.board.removeEventListenersToSpots()
        }
      } else {
        clearTimeout(timerId)
        changeTimerValue.call(this)
        this.checkTimeUp.call(this)
      }
  }.bind(this), 1 * 1000)
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
}

Game.prototype.clearAllScorerTimeRender = function () {
  renderSwitchTurn.call(this)
  changeNameValue.call(this)
  changeTimerValue.call(this)
  changeTimerValue.call(this)
  changeScore.call(this.turn)
}

function renderPlayer () {
  var playerElement = document.createElement('div')
  playerElement.className = 'player'
  playerElement.innerHTML = 'player: ' + this.turn.name
  playerElement.style.textAlign = 'center'
  playerElement.style.fontSize = '24px'

  document.getElementsByTagName('header')[0].append(playerElement);
}

function renderSwitchTurn () {
  var switchTurnButton = document.createElement('a')
  switchTurnButton.innerHTML = 'Switch turn'

  switchTurnButton.onclick = function (e) {
    document.getElementsByClassName('notification')[0].remove();
    e.target.remove()
    this.configureToStartPlaying()
  }.bind(this)

  var switchTurnDiv = document.createElement('div')
  switchTurnDiv.className = 'notification'
  switchTurnDiv.innerHTML = 'Now is: ' + this.turn.name + "'s turn"

  switchTurnDiv.append(switchTurnButton);

  document.body.append(switchTurnDiv);
}

function renderWinner () {
  console.log(this)
  var switchTurnButton = document.createElement('a')
  switchTurnButton.innerHTML = 'Play again'

  switchTurnButton.onclick = function (e) {
    document.getElementsByClassName('notification')[0].remove();
    e.target.remove()
    //this.switchTurn()
  }.bind(this)

  var switchTurnDiv = document.createElement('div')
  switchTurnDiv.className = 'notification'
  switchTurnDiv.innerHTML = 'The winner is ' + this.winner.name

  switchTurnDiv.append(switchTurnButton);

  document.body.append(switchTurnDiv);
}

function changeNameValue () {
  document.getElementsByClassName('player')[0].innerHTML = 'player: ' + this.turn.name
}

function changeTimerValue () {
  document.getElementsByClassName('timer')[0].innerHTML = this.turn.timer / 1000
}
