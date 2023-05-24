

//code for the label to stay on when clicked radio button size of pizza
// Add click event listener to each radio button
const radioButtons = document.querySelectorAll('input[name="pizza-size"]');
radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('click', function() {
    // Remove 'checked' class from all labels
    const labels = document.querySelectorAll('.discount-label');
    labels.forEach(function(label) {
      label.classList.remove('checked');
    });

    // Add 'checked' class to the clicked label
    const label = this.parentNode.querySelector('.discount-label');
    label.classList.add('checked');
  });
});

//print the users order
document.getElementById("orderReadyButton").addEventListener("click", getOrderList);

function getOrderList() {
  // Get the selected values from the form
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var address = document.getElementById("address").value;
  
  var toppings = document.querySelectorAll('input[name="topping"]:checked');
  var selectedToppings = Array.from(toppings).map(topping => topping.value);

  var drinks = document.querySelectorAll('input[name="drink"]:checked');
  var selectedDrinks = Array.from(drinks).map(drink => drink.value);

  // Build the order message
  var orderMessage = "Order:";
  orderMessage += "\nName: " + firstName + " " + lastName;
  orderMessage += "\nAddress: " + address;
  orderMessage += "\nToppings: " + selectedToppings.join(", ");
  orderMessage += "\nDrinks: " + selectedDrinks.join(", ");

  // Display the order message
  var orderList = document.getElementById("orderList");
  orderList.innerHTML = "<li>" + orderMessage + "</li>";
}









