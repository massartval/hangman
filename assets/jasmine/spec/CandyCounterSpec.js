describe("setCandyBar", () => {
  it("fills the containers with 510 candies of each type", function () {
    setCandyBar(510);
    for (i of candyBar) {
      expect(i.amount).toEqual(510);
    }
    //expect(caramels.amount).toEqual(510);
    //expect(lollipops.amount).toEqual(510);
    //expect(skittles.amount).toEqual(510);
  });
});

describe("takeTwenty", () => {
  it("should leave 490 of said candy type in the bin", () => {
    takeSomeCandy(20);
    for (i of candyBar) {
      expect(i.amount).toEqual(490);
    }
    //expect(caramels.amount).toEqual(490);
    //expect(lollipops.amount).toEqual(490);
    //expect(skittles.amount).toEqual(490);
  });
});

describe("refill", () => {
  it("should fill one of the bins without affecting the others", () => {
    caramels.amount = 4;
    skittles.amount = 25;
    refillWhenEmpty(600);
    expect(caramels.amount).toEqual(604);
    expect(lollipops.amount).toEqual(490);
    expect(skittles.amount).toEqual(25);
  });
});

/*
describe("When someone removes 20 candies from a bin of 510 candies (of one candy type)", () => {
  for (i = 0; i >= 2; i++) {
    console.log(candyBar[i]);
    candyBar.amount[i] = candyBar.amount[i] - 20;
    var result = candyBar.amount[i];
    console.log(candyBar[i]);
    return candyBar[i];
  }
  it("should leave 490 of said candy type in the bin", function () {
    expect(result).toEqual(490);
  });
});*/
