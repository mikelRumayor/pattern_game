var Game  = require('../js/Game.js')
var Player = require('../js/Player.js')

describe("Game", function() {
  var game
  var timer = 6 * 1000
  var player1
  var player2

  beforeEach(function() {
    game = new Game(timer);
    player1 = new Player(0, 'Player1')
    player2 = new Player(1, 'Player2')
  })

  describe("constructor function", function () {
    it("should receive 1 arguments (time) in milliseconds", function () {
      expect(Game.length).toEqual(1);
    });

    it("should receive the time property as its 1st argument", function () {
      expect(game.timer).toEqual(timer);
    })
  })

  describe("players added to the game", function () {
    it("players have been added to the game", function() {
      spyOn(game, 'addPlayer');

      game.addPlayer(player1)
      game.addPlayer(player2)

      expect(game.addPlayer).toHaveBeenCalled()

      expect(game.playersArray.length).toEqual(2)
    })
  })

  describe("game has been initialized", function() {
    beforeEach(function() {
      game.initializeGame()
    })

    it("should indicate that the game been restarted", function() {
      expect(game.isWinner).toBeFalsy()
    })

    it("should indicate that the player 1 has the turn", function() {
      spyOn(game, 'setTurn');

      game.setTurn(player1)
      expect(game.setTurn).toHaveBeenCalled()
      expect(game.whoseTurn).toEqual('Player1')
    })
  })

    describe("player has switched the turn", function() {
      beforeEach(function() {
        game.chageTurn()
      });

      it("should indicate that the turn has been changed", function() {
        spyOn(game, 'switchTurn');

        game.setTurn(player1)
        expect(game.switchTurn).toHaveBeenCalled()
        expect(game.whoseTurn).toEqual('Player2')
      })
    })
})
