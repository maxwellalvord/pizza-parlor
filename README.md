Describe: Pizza()

Test: "It should return a Pizza object with two properties, toppings and size."
Code: const newPizza = new Pizza( "pepperoni", "medium");
Expected Output: Pizza { toppings: "Pepperoni", size: "medium" }

Test: "It should take user input and display the properties in console."
Code: let newPizaa = new Pizza(psize, top);
Expected Output: Pizza { toppings: "Pepperoni", size: "medium" } // whatever user input is.

Test: "it should output the pizza object to the user after button press."
Code: let newPizaa = new Pizza(psize, top);
const psize = $("#size").val();
const top = $("#top").val();
Expected Output: Pizza { toppings: "Pepperoni", size: "medium" } // whatever user input is on our webpage.

Test: "it should take the properties from new pizza and console.log them in our getCost prototypal method"
Code: let newPizaa = new Pizza(psize, top);
const psize = $("#size").val();
const top = $("#top").val();
Pizza.prototype.getCost = function (size, top){}
Expected Output: Pizza { toppings: "Pepperoni", size: "medium" } // whatever user input variable is console logged in getCost().

