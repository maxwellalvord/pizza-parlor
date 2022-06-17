// Business Logic
function Pizza(){
  this.topping = "";
  this.size = "";
  this.price = 0;
}






















//UI Logic
$(document).ready(function() {
  $("#subform").submit(function(event) {
    let newPizza = new Pizza()
  });
});