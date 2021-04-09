# Pizza Parlor

#### _A website where you can order pizzas, 4/9/2021_

#### By _**Tiffany Greathead**_

## Description

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
Describe: Pizza.pizzaCost()\
Test: "Create a prototype that will calculate the cost of the pizza based on size"\
Code:\
const pizza = new Pizza("medium", ["pepperoni", "red peppers", "green peppers"]);\
pizza.pizzaCost()
Expected Output: $7.00

Test: "Create a prototype that will calculate the cost of the pizza based on size and the amount of toppings"\
Code:\
const pizza = new Pizza("medium", ["pepperoni", "red peppers", "green peppers"]);\
pizza.pizzaCost()
Expected Output: $7.50
