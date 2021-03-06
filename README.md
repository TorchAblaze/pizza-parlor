# Pizza My Heart

#### _A website where you can order pizzas, 4/9/2021_

#### By _**Tiffany Greathead**_

## Description

Pizza My Heart is a website for a nonexistent pizza parlor. Users can choose what size pizza they want (small, medium or large) and check what types of toppings they want from the list provided. After the user selects the "Order Now" button, a summary of their order will appear below the form as well as the total cost of that order. Pizza prices may vary depending on what size pizza is ordered, and the number of toppings it has. Each order is stored as a JavaScript object which is then stored in an array.

## Setup/Installation Requirements

Software Requirements

1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.

Open via Bash/GitBash:

1. Clone this repository onto your computer:
   `git clone https://github.com/TorchAblaze/pizza-parlor.git`
2. Navigate into the `pizza-parlor` directory, and open in Visual Studio Code or preferred text editor
3. Open index.html in Chrome or preferred browser

#### To see my live website go to https://TorchAblaze.github.io/pizza-parlor!

## Known Bugs

_No known bugs_

## Support and contact details

_Please reach out through my GitHub account._

## Technologies Used

- HTML
- CSS
- JavaScript
- VSCode

### License

MIT License.

Copyright (c) 2021 **_Tiffany Greathead_**

Describe: Pizza()

Test: "Make an object constructor that has a size property" \
Code:\
const pizza = new Pizza("medium"); \
pizza.size \
Expected Output: "medium"

Test: "Add a toppings property that returns an array of desired toppings"\
Code:\
const pizza = new Pizza("medium", ["pepperoni", "red peppers", "green peppers"]);\
pizza.toppings\
Expected Output: ["pepperoni", "red peppers", "green peppers"];
\
\
Describe: Pizza.pizzaCost()

Test: "Create a prototype that will calculate the cost of the pizza based on size"\
Code:\
const pizza = new Pizza("medium", ["pepperoni", "red peppers", "green peppers"]);\
pizza.pizzaCost()\
Expected Output: $7.00

Test: "Create a prototype that will calculate the cost of the pizza based on size and the amount of toppings"\
Code:\
const pizza = new Pizza("medium", ["pepperoni", "red peppers", "green peppers"]);\
pizza.pizzaCost()\
Expected Output: $7.50

Test: "Add a cost property to the Pizza Object"\
Code:\
const pizza = new Pizza("medium", ["pepperoni", "red peppers", "green peppers"]);\
pizza.pizzaCost()\
pizza\
Expected Output: Pizza {size: 'medium', toppings: [ 'pepperoni', 'red peppers', 'green peppers' ], cost: '$7.50'}

Test: "Join the pizza topping array so the toppings list is a string with each listed item separated by commas"\
Code:\
const pizza = new Pizza("medium", ["pepperoni", "red peppers", "green peppers"]);\
pizza.pizzaCost()\
Expected Output: "medium", "pepperoni, red peppers, green peppers", "$7.50"
