// Business Logic
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}






// UI logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("label").hide();
    $("select").hide();
    const psize = $("#size").val();
    const top = $("#top").val();
    let newPizza = new Pizza(psize, top);
    $("#finalPizza").html(JSON.stringify(newPizza));
    
  });
});