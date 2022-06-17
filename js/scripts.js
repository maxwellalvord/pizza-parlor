function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}
// let newzaa = new Pizza("pepperoni", "medium")
// console.log(newzaa);






$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const psize = $("#size").val();
    const top = $("#top").val();
    let newzaa = new Pizza(psize, top);
    console.log(newzaa);
  });
});