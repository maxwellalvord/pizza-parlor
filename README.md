# 🍕Pizza Parlor🍕
By Maxwell Alvord

A simple html page for the user to be able buy a pizza by inputting a size and one or two topping and be told a recap on the pizza and given the price.

## technologies Used

* HTML
* CSS
* Bootstrap
* JQuery
* MarkDown

## Description

This page will allow the user to input a size and toppings for a pizza and get a receipt of what they ordered and how much it costs in German Francs.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Open pizza-parlor folder.
* Open index.html

### Alternative Setup
* Visit the [gh-pages](https://maxwellalvord.github.io/pizza-parlor/)

## Known Bugs
* No Cookies are saved when page is reloaded causing data to be lost if user accidentally refreshes page.

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright &copy;
2022 Maxwell Alvord

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Manual testing

Describe: Pizza()

Test: "It should return a Pizza object with two properties, toppings and size."
Code: const newPizza = new Pizza( "pepperoni", "medium");
Expected Output: Pizza { toppings: "Pepperoni", size: "medium" }

Test: "It should take user input and display the properties in console."
Code: let newPizza = new Pizza(psize, top);
Expected Output: Pizza { toppings: "Pepperoni", size: "medium" } // whatever user input is.

Test: "It should output the pizza object to the user after button press."
Code: let newPizza = new Pizza(psize, top);
const psize = ("#size").val();
const top = ("#top").val();
Expected Output: Pizza { toppings: "Pepperoni", size: "medium" } // whatever user input is on our webpage.

Test: "It should take the properties from new pizza and console.log them in our getCost prototypal method"
Code: let newPizza = new Pizza(psize, top);
const psize = ("#size").val();
const top = ("#top").val();
Pizza.prototype.getCost = function (size, top){}
Expected Output: Pizza { toppings: "Pepperoni", size: "medium" } // whatever user input variable is console logged in getCost().

Test: "It should take the properties from new pizza use else if statements to determine a cost for the pizza."
Code: let newPizza = new Pizza(psize, top);
const psize = ("#size").val();
const top = ("#top").val();
Pizza.prototype.getCost = function (size, top){}
let cost = 0;
if ((size == "Medium") && (top == "Pepperoni")) {
cost += 10;
Expected Output: console.log for cost when you order a medium pepperoni should be 10.

Test: "It should take the properties from new pizza and use else if statements to determine a cost for different kinds of pizza."
Code: let newPizza = new Pizza(psize, top);
const psize = ("#size").val();
const top = ("#top").val();
Pizza.prototype.getCost = function (size, top){}
let cost = 0;
if ((size == "Medium") && (top == "Pepperoni")) {
cost += 10;
Expected Output: console.log for cost when you order a medium pepperoni should be 10, medium Olives is 9 and so on for bacon and Cheese on medium.


Test: "it should provide full application functionality by letting you to select your pizza properties and then repeat them back and give a price."
Code: let newPizza = new Pizza(psize, top);
const psize = ("#size").val();
const top = ("#top").val();
Pizza.prototype.getCost = function (size, top){}
let cost = 0;
Expected Output: Your pizza will have the following properties!
{"size":"Small","topping":"Pepperoni"}

The dollar amount of your Pizza is:
4
(this will change depending on size and topping).

