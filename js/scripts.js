// Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaCost = function () {
  let costFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let cost = 5.0;
  if (this.size === "large") {
    cost += 4.0;
  } else if (this.size === "medium") {
    cost += 2.0;
  }
  if (this.toppings) {
    if (this.toppings.length > 3) {
      cost += 0.75;
    } else if (this.toppings.length > 1) {
      cost += 0.5;
    }
  } else {
    this.toppings = "none";
  }
  this.cost = costFormatter.format(cost);
  return this.cost;
};

// UI Logic
