
// Business Logic for Contacts ---------
function Pizza(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Pizza.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

// User Interface Logic ---------
let customerBook = new CustomerBook();

$(document).ready(function() {
  $("form#newOne").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("#size").val();
    const inputtedTopping = $("#top").val();
    let newPizza = new Pizza(inputtedSize, inputtedTopping);
    // customerBook.addContact(newContact);
    // console.log(customerBook.contacts);
  });
});