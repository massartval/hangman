describe("CandyBar", function () {
    var day;
    describe("when a new day starts", function() {
        beforeEach(function () {
            day = new CandyBar();
          })
        it ("should contain 510 candies of each type", function(){
            expect(day.caramels).toEqual(510);
            expect(day.lollipops).toEqual(510);
            expect(day.skittles).toEqual(510);
        })
    })
    describe("when a bag is made", function(){
        it("should substract a certain amount of each type of candy from the candy bar", function() {
        expect(day.caramels).toBeLessThan(510);
        expect(day.lollipops).toBeLessThan(510);
        expect(day.skittles).toBeLessThan(510);
        })
    })


  /* function rollMany(n, pins) {
      for (var i = 0; i < n; i++) {
        game.roll(pins);
      }
    } */

  it("should handle a gutter game", function () {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it("should properly calculate a strike", function () {
    // test
  });

  it("should properly calculate a spare", function () {
    // test
  });
});


describe("Video player", function() {
    describe("when the page loads", function() {
        it("should automatically play the video", function() {
        };
    });
    describe("when user clicks the play button", function() {
        it("should play the video", function() {
        };
    });
});