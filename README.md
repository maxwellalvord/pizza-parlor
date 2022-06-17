Describe: Pizza()

Test: "It should return a Pizza object with two properties, toppings and size."
Code: const newPizza = new Pizza( "pepperoni", "medium");
Expected Output: Pizza { toppings: "Pepperoni", size: "medium" }

Test: "It should take user input and display the properties in console."
Code: let newPizza = new Pizza(psize, top);
Expected Output: Pizza { toppings: "Pepperoni", size: "medium" } // whatever user input is.

Test: "It should output the pizza object to the user after button press."
Code: let newPizza = new Pizza(psize, top);
const psize = $("#size").val();
const top = $("#top").val();
Expected Output: Pizza { toppings: "Pepperoni", size: "medium" } // whatever user input is on our webpage.

Test: "It should take the properties from new pizza and console.log them in our getCost prototypal method"
Code: let newPizza = new Pizza(psize, top);
const psize = $("#size").val();
const top = $("#top").val();
Pizza.prototype.getCost = function (size, top){}
Expected Output: Pizza { toppings: "Pepperoni", size: "medium" } // whatever user input variable is console logged in getCost().

Test: "It should take the properties from new pizza use else if statements to determine a cost for the pizza."
Code: let newPizza = new Pizza(psize, top);
const psize = $("#size").val();
const top = $("#top").val();
Pizza.prototype.getCost = function (size, top){}
let cost = 0;
if ((size == "Medium") && (top == "Pepperoni")) {
cost += 10;
Expected Output: console.log for cost when you order a medium pepperoni should be 10.

Test: "It should take the properties from new pizza and use else if statements to determine a cost for different kinds of pizza."
Code: let newPizza = new Pizza(psize, top);
const psize = $("#size").val();
const top = $("#top").val();
Pizza.prototype.getCost = function (size, top){}
let cost = 0;
if ((size == "Medium") && (top == "Pepperoni")) {
cost += 10;
Expected Output: console.log for cost when you order a medium pepperoni should be 10, medium Olives is 9 and so on for bacon and Cheese on medium.


Test: "it should provide full application functionality by letting you to select your pizza properties and then repeat them back and give a price."
Code: let newPizza = new Pizza(psize, top);
const psize = $("#size").val();
const top = $("#top").val();
Pizza.prototype.getCost = function (size, top){}
let cost = 0;
Expected Output: Your pizza will have the following properties!
{"size":"Small","topping":"Pepperoni"}

The dollar amount of your Pizza is:
4
(this will change depending on size and topping).

