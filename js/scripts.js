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
    if (this.toppings.length > 6) {
      cost += 1.75;
    } else if (this.toppings.length > 4) {
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
  let pizzaOrders = [];
  $("form#pizza-order").submit(function (event) {
    event.preventDefault();
    const pizzaSize = $("input:radio[name=size]:checked").val();
    const pizzaToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function () {
      pizzaToppings.push($(this).val());
    });
    let pizzaOrder = new Pizza(pizzaSize, pizzaToppings);

    pizzaOrder.pizzaCost();
    pizzaOrders.push(pizzaOrder);

    let pizzaOrderNumbers = "";
    pizzaOrders.forEach(function (order, index) {
      pizzaOrderNumbers += `<ul> <li id=${index + 1}>Order Number: ${
        index + 1
      }</li> <ul> <li id=${order.size}>Size: ${order.size}</li> <li id=${
        order.toppings
      }>Toppings: ${order.toppings}</li> <li id=${order.cost}>Cost: ${
        order.cost
      }</li> </ul> </ul>`;
    });
    $("#output").html(pizzaOrderNumbers);
    $("#output").show();
  });
});
