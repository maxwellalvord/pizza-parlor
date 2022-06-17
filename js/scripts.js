// Business Logic
function Pizza(size, topping, topping2) {
  this.size = size;
  this.topping = topping;
  this.topping2 = topping2;
}
let cost = 0;
Pizza.prototype.getCost = function (size, top, top2){
  if ((size == "Medium") && (top == "Pepperoni") && (top2 == "None")) {
    cost += 10;
  } else if ((size == "Medium") && (top == "Olives") && (top2 == "None")){
    cost += 9;
  } else if ((size == "Medium") && (top == "Bacon") && (top2 == "None")){
    cost += 8;
  } else if ((size == "Medium") && (top == "Cheese") && (top2 == "None")){
    cost += 7;
  } else if ((size == "Small") && (top == "Cheese") && (top2 == "None")){
    cost += 6;
  } else if ((size == "Small") && (top == "Bacon") && (top2 == "None")){
    cost += 5;
  } else if ((size == "Small") && (top == "Pepperoni") && (top2 == "None")){
    cost += 4;
  } else if ((size == "Small") && (top == "Olives") && (top2 == "None")){
    cost += 3;
  } else if ((size == "Medium") && (top == "Pepperoni") && (top2 == "Pepperoni")) {
    cost += 20;
  } else if ((size == "Medium") && (top == "Olives") && (top2 == "Pepperoni")){
    cost += 19;
  } else if ((size == "Medium") && (top == "Bacon") && (top2 == "Pepperoni")){
    cost += 18;
  } else if ((size == "Medium") && (top == "Cheese") && (top2 == "Pepperoni")){
    cost += 17;
  } else if ((size == "Small") && (top == "Cheese") && (top2 == "Pepperoni")){
    cost += 16;
  } else if ((size == "Small") && (top == "Bacon") && (top2 == "Pepperoni")){
    cost += 15;
  } else if ((size == "Small") && (top == "Pepperoni") && (top2 == "Pepperoni")){
    cost += 14;
  } else if ((size == "Small") && (top == "Olives") && (top2 == "Pepperoni")){
    cost += 13;
  } else if ((size == "Medium") && (top == "Pepperoni") && (top2 == "Olives")) {
    cost += 30;
  } else if ((size == "Medium") && (top == "Olives") && (top2 == "Olives")){
    cost += 29;
  } else if ((size == "Medium") && (top == "Bacon") && (top2 == "Olives")){
    cost += 28;
  } else if ((size == "Medium") && (top == "Cheese") && (top2 == "Olives")){
    cost += 27;
  } else if ((size == "Small") && (top == "Cheese") && (top2 == "Olives")){
    cost += 26;
  } else if ((size == "Small") && (top == "Bacon") && (top2 == "Olives")){
    cost += 25;
  } else if ((size == "Small") && (top == "Pepperoni") && (top2 == "Olives")){
    cost += 24;
  } else if ((size == "Small") && (top == "Olives") && (top2 == "Olives")){
    cost += 23;
  } else if ((size == "Medium") && (top == "Pepperoni") && (top2 == "Bacon")) {
    cost += 40;
  } else if ((size == "Medium") && (top == "Olives") && (top2 == "Bacon")){
    cost += 49;
  } else if ((size == "Medium") && (top == "Bacon") && (top2 == "Bacon")){
    cost += 48;
  } else if ((size == "Medium") && (top == "Cheese") && (top2 == "Bacon")){
    cost += 47;
  } else if ((size == "Small") && (top == "Cheese") && (top2 == "Bacon")){
    cost += 46;
  } else if ((size == "Small") && (top == "Bacon") && (top2 == "Bacon")){
    cost += 45;
  } else if ((size == "Small") && (top == "Pepperoni") && (top2 == "Bacon")){
    cost += 44;
  } else if ((size == "Small") && (top == "Olives") && (top2 == "Bacon")){
    cost += 43;
  } else if ((size == "Medium") && (top == "Pepperoni") && (top2 == "Cheese")) {
    cost += 50;
  } else if ((size == "Medium") && (top == "Olives") && (top2 == "Cheese")){
    cost += 59;
  } else if ((size == "Medium") && (top == "Bacon") && (top2 == "Cheese")){
    cost += 58;
  } else if ((size == "Medium") && (top == "Cheese") && (top2 == "Cheese")){
    cost += 57;
  } else if ((size == "Small") && (top == "Cheese") && (top2 == "Cheese")){
    cost += 56;
  } else if ((size == "Small") && (top == "Bacon") && (top2 == "Cheese")){
    cost += 55;
  } else if ((size == "Small") && (top == "Pepperoni") && (top2 == "Cheese")){
    cost += 54;
  } else if ((size == "Small") && (top == "Olives") && (top2 == "Cheese")){
    cost += 53;
  }
}
 
// UI logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("label").hide();
    $("select").hide();
    $("h4").show();
    $("h5").show();
    $("h6").show();
    $("#subform").hide();
    $("#reset").show();
    $("#photo").show();
    const psize = $("#size").val();
    const top = $("#top").val();
    const top2 = $("#top2").val();
    let newPizza = new Pizza(psize, top, top2);
    // $("#finalPizza").html(JSON.stringify(newPizza).replace(/[,'"{}]+/g, ' '));
    // both lines above and below display the object in different way, any suggestions?
    document.getElementById("finalPizz").innerHTML = "🍕Size you selected: " + newPizza.size + "🍕<br>" + "🍕Your first pizza topping: " + newPizza.topping + "🍕<br>" + "🍕Heres the second topping if you got one: " + newPizza.topping2 + "🍕";
    newPizza.getCost(newPizza.size, newPizza.topping, newPizza.topping2);
    $("#finalCost").html(cost)
    
  });
  $("#reset").click(function(event) {
    event.preventDefault();
    window.location.reload();
  });
});