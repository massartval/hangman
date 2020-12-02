class Candy {
  constructor(amount, name) {
    this.amount = amount;
    this.name = name;
  }
  take(some) {
    this.amount = this.amount - some;
    return this.amount;
  }
  refill(some) {
    this.amount = this.amount + some;
  }
}

let caramels = new Candy(0, "caramel");
let lollipops = new Candy(0, "lollipop");
let skittles = new Candy(0, "skittle");

let candyBar = [caramels, lollipops, skittles];

function setCandyBar(some) {
  candyBar.forEach((i) => {
    i.amount = some;
  });
  return candyBar;
}

function takeSomeCandy(some) {
  candyBar.forEach((i) => {
    i.take(some);
  });
  return candyBar;
}

function refillWhenEmpty(some) {
  candyBar.forEach((i) => {
    if (i.amount < 20) {
      i.refill(some);
    }
  });
}
