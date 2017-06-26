var Game  = require('../js/Game.js')
var Player = require('../js/Player.js')

var TIMER_TIME =  60 * 1000
var GRID = 3

describe("Game", function() {
  var game
  var timer = TIMER_TIME
  var player1
  var player2
  var winner

  beforeEach(function() {
    game = new Game(timer);
    player1 = new Player(0, 'Player1', timer)
    player2 = new Player(1, 'Player2', timer)
  })

  describe("constructor function", function () {
    it("should receive 1 arguments (time) in milliseconds", function () {
      expect(Game.length).toEqual(1);
    });

    it("should receive the time property as its 1st argument", function () {
      expect(game.timer).toEqual(timer);
    })
  })

  describe("players", function () {
    it("should have been added to the game", function() {

      game.addPlayer(player1)
      game.addPlayer(player2)

      expect(game.playersArray.length).toEqual(2)
    })
  })

  describe("initialized", function() {
    beforeEach(function() {
      game.initializeGame()
    })

    it("should indicate that the game been restarted", function() {
      expect(game.winner).toBeFalsy()
    })

    it("should indicate that the player 1 has the turn", function() {
      game.setTurn(player1)
      expect(game.whoseTurn()).toEqual('Player1')
    })
  })

    describe("turn", function() {
      beforeEach(function() {
        game.addPlayer(player1)
        game.addPlayer(player2)
        game.setTurn(player1)

      });

      it("should indicate that the turn has been changed", function() {
        game.setTurn(player1)
        expect(game.switchTurn())
        expect(game.whoseTurn()).toEqual('Player2')
      })
    })

    describe("game has finnished", function() {
      beforeEach(function() {
        player1.timer = 0
        player2.timer = 0
        player1.score = 150
        player2.score = 250

        game.addPlayer(player1)
        game.addPlayer(player2)
      });

      it("should indicate that player 2 has won the game", function() {
        game.whoWon()
        expect(game.winner.name).toEqual('Player2')
      })
    })
})
