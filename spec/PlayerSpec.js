var Player = require('../js/Player.js')
var Board = require('../js/Board.js')

var TIMER_TIME =  60 * 1000

describe("Player", function() {
  var player;
  var id = 0
  var name = 'Pedro'
  var board
  var timer = TIMER_TIME
  beforeEach(function() {
    player = new Player(id, name, time);
  })

  describe("constructor function", function () {
    it("should receive 2 arguments (time) in milliseconds", function () {
      expect(Player.length).toEqual(3);
    });

    it("should receive the width property as its 1st argument", function () {
      expect(player.width).toEqual(width);
    })

    it("should receive the height property as its 1st argument", function () {
      expect(player.height).toEqual(height);
    })

    it("should receive the timer property as its 1st argument", function () {
      expect(player.timer).toEqual(timer);
    })
  })

  describe("initializes board", function () {
    var board
    beforeEach(function() {
      board = new Board (10, 10);
    })

    it("should have a board to play", function () {
      spyOn(player, 'addBoard')
      player.addBoard(board)
      expect(player.addBoard(board)).toHaveBeenCalled()
      expect(player.board).toBeTruthy();
    });

  })

  describe("answering the pattern", function() {
    beforeEach(function() {
      player.score = 0
      player.time = TIME
    });

    it("should answer the pattern", function() {
      spyOn(player, 'answear')

      expect(player.answear())
      expect(player.answear()).toHaveBeenCalled()
    })


    it("should indicate that the player has matched the right pattern", function() {
      player.answer = true

      expect(player.rightAnswear()).toEqual(true)
      expect(player.score()).toEqual(10)
      expect(player.time()).toEqual(TIME + 5)
    })

    it("should indicate that the player has matched the wrong pattern", function() {
      player.answer = false

      expect(player.rightAnswear()).toEqual(false)
      expect(player.score()).toEqual(10)
      expect(player.time()).toEqual(TIME - 5)
    })
  })

  describe("players time has been expired", function() {
    beforeEach(function() {
      player.timer = 0
    })

    it("should indicate that player has finnished its game", function() {
      player.timeUp(player1).toEqual(true)
    })
  })
})
