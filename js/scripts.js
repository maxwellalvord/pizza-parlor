// Business Logic
function Pizza(size, topping, topping2) {
  this.size = size;
  this.topping = topping;
  this.topping2 = topping2;
}
let cost = 0;
Pizza.prototype.getCost = function (size, top, top2){
  switch(size) {
    case "Small":
      cost += 5;
      console
      break;
    case "Medium":
      cost += 8;
      break;
    default:
      throw Error("Invalid size");
  }

  switch(top) {
    case "Olives":
      cost += 2;
      break;
    case "Bacon":
      cost += 3;
      break;
    case "Cheese":
        cost += 1;
        break;
    case "Pepperoni":
        cost += 4;
        break;
    default:
      throw Error("At Least one topping");
  }

  switch(top2) {
    case "Olives":
      cost += 2;
      break;
    case "Bacon":
      cost += 3;
      break;
    case "Cheese":
        cost += 1;
        break;
    case "Pepperoni":
        cost += 4;
        break;
    case "None":
        cost += 0;
        break;
    default:
      throw Error("Select None if no second topping is desired");
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