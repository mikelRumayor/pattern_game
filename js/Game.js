function Game (timer) {
  this.timer = timer
  this.playersArray = []
  this.winner = ''
  this.turn = ''
}


Game.prototype.addPlayer = function (player) {
  this.playersArray.push(player)
}

Game.prototype.initializeGame = function (player) {
}

Game.prototype.setTurn = function (player) {
  this.turn = player
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

module.exports = Game
