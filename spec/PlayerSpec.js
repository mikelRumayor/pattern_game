var Player = require('./js/Player.js')
var Board = require('./js/Board.js')

describe("Player", function() {
  var player;
  var id = 0
  var name = 'Pedro'
  var board
  beforeEach(function() {
    player = new Player(id, name);
  })

  describe("constructor function", function () {
    it("should receive 2 arguments (time) in milliseconds", function () {
      expect(Player.length).toEqual(2);
    });

    it("should receive the width property as its 1st argument", function () {
      expect(player.width).toEqual(width);
    })

    it("should receive the height property as its 1st argument", function () {
      expect(player.height).toEqual(height);
    })
  })

  describe("should have a board to play", function () {
    it("should have a board to play", function () {
      expect(Player.length).toEqual(2);
    });

    it("should receive the width property as its 1st argument", function () {
      expect(player.width).toEqual(width);
    })

    it("should receive the height property as its 1st argument", function () {
      expect(player.height).toEqual(height);
    })
  })



})
