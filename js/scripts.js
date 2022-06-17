// Business Logic
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.getCost = function (size, top){
  let cost = 0;
  if ((size == "Medium") && (top == "Pepperoni")) {
    cost += 10;
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
    const psize = $("#size").val();
    const top = $("#top").val();
    let newPizza = new Pizza(psize, top);
    $("#finalPizza").html(JSON.stringify(newPizza));
    newPizza.getCost(newPizza.size, newPizza.topping)
    
  });
});