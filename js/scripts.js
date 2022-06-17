// Business Logic
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}






// UI logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const psize = $("#size").val();
    const top = $("#top").val();
    let newPizaa = new Pizza(psize, top);
    
  });
});