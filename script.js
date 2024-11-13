function updateTotal() {
  const quantity = parseInt(document.getElementById("quantity").value, 10);
  const price = 15000; 

  if (isNaN(quantity) || quantity <= 0) {
      document.getElementById("total").innerText = "Invalid Quantity";
      return;
  }

  const total = price * quantity;
  document.getElementById("total").innerText = total;
}

function showAlert() {
  const quantity = parseInt(document.getElementById("quantity").value, 10);
  const price = 15000;

  if (isNaN(quantity) || quantity <= 0) {
      alert("Invalid quantity. Please enter a valid number.");
      return;
  }

  const total = price * quantity;
  alert(`You added ${quantity} items to your cart for Rs. ${total}`)
 
}