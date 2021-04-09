// Business Logic for Pizza Orders
function PizzaOrders() {
  this.orders = {};
  this.currentOrderId = 0;
}

// Business Logic for Pizza
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
  if (this.toppings != "") {
    if (this.toppings.length > 4) {
      cost += 0.75;
    } else if (this.toppings.length > 2) {
      cost += 0.5;
    }
    this.toppings = this.toppings.join(", ");
  } else {
    this.toppings = "none";
  }
  this.cost = costFormatter.format(cost);
  return this.cost;
};

// UI Logic
$(document).ready(function () {
  $("form#pizza-order").submit(function (event) {
    event.preventDefault();
    const pizzaSize = $("input:radio[name=size]:checked").val();
    const pizzaToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function () {
      pizzaToppings.push($(this).val());
    });

    let pizzaOrder = new Pizza(pizzaSize, pizzaToppings);
    pizzaOrder.pizzaCost();
    $("#output").text(
      `Size: ${pizzaOrder.size} Toppings: ${pizzaOrder.toppings} Total: ${pizzaOrder.cost}`
    );
    console.log(pizzaOrder.toppings);
  });
});
