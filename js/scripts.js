// Business Logic
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}
let cost = 0;
Pizza.prototype.getCost = function (size, top){
  if ((size == "Medium") && (top == "Pepperoni")) {
    cost += 10;
  } else if ((size == "Medium") && (top == "Olives")){
    cost += 9;
  } else if ((size == "Medium") && (top == "Bacon")){
    cost += 8;
  } else if ((size == "Medium") && (top == "Cheese")){
    cost += 7;
  } else if ((size == "Small") && (top == "Cheese")){
    cost += 6;
  } else if ((size == "Small") && (top == "Bacon")){
    cost += 5;
  } else if ((size == "Small") && (top == "Pepperoni")){
    cost += 4;
  } else if ((size == "Small") && (top == "Olives")){
    cost += 3;
  }
  console.log(cost);
}




// UI logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("label").hide();
    $("select").hide();
    $("h4").show();
    $("h5").show();
    const psize = $("#size").val();
    const top = $("#top").val();
    let newPizza = new Pizza(psize, top);
    $("#finalPizza").html(JSON.stringify(newPizza));
    newPizza.getCost(newPizza.size, newPizza.topping);
    $("#finalCost").html(cost)
  });
  $("#reset").click(function(event) {
    event.preventDefault();
    window.location.reload();
  });
});