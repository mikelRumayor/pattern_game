var Board = require('../js/Board')

var GRID = 3

describe("Board", function() {
  var board;
  var width = GRID
  var height = GRID

  beforeEach(function() {
    board = new Board(width, height);
  })

  describe("constructor function", function () {
    it("should receive 2 arguments (time) in milliseconds", function () {
      expect(Board.length).toEqual(2);
    })

    it("should receive the width property as its 1st argument", function () {
      expect(board.width).toEqual(width);
    })

    it("should receive the height property as its 1st argument", function () {
      expect(board.height).toEqual(height);
    })
  })

  describe("generated board pattern", function () {
    beforeEach(function() {
      pattern = [];
    })

    it("should generate a randomized sequencial array", function () {
      board.generatePattern()

      expect(board.pattern.length).toBeLessThan(GRID * GRID);
    })
  })

  describe("user pattern", function () {
    beforeEach(function() {
      queryPattern = [];
    })

    it("should generate a randomized sequencial array", function () {
      board.generateQueryPattern()
      expect(board.pattern.length).toBeLessThan(GRID * GRID);
    })
  })

})
