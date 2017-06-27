function Game (timer) {
  this.timer = timer
  this.playersArray = []
  this.winner = ''
  this.turn = ''
  this.boardCreationCallback = null
  this.boardRemovalCallback = null
}

Game.prototype.addPlayer = function (player) {
  this.playersArray.push(player)
}

Game.prototype.initializeGame = function () {
  this.setTurn(this.playersArray[0])

}

Game.prototype.setTurn = function (player) {
  this.turn = player
  this.turn.startPlaying()
  // TODO activte to play
  // this.checkTimeUp()
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
  this.turn.startPlaying()
  this.checkTimeUp()
}

Game.prototype.whoWon = function (){
  this.winner = this.playersArray[0]
  this.playersArray.forEach(function (player) {
      if(this.winner.score < player.score) {
        this.winner = player
      }
  }.bind(this))

  return this.winner.name
}

Game.prototype.checkTimeUp = function () {
  var timerId = setTimeout(function () {
    this.turn.timer -= 1 * 1000
    console.log('time: ', this.turn.timer)
    if(this.turn.timeUp()) {
        alert('switch player')
        clearTimeout(timerId)
        var finnished = false

        this.playersArray.forEach(function(player) {
          if (player.score) {
            finnished = true
          }
        })
        alert(finnished)
        if(finnished){
          alert(this.whoWon())
        } else {
          this.switchTurn()
        }
      } else {
        clearTimeout(timerId)
        this.checkTimeUp()
      }
  }.bind(this), 1 * 1000)
}
