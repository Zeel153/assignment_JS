// Reserve String Function
function reverseString() {
  const input = document.getElementById("stringInput").value;
  let reversed = "";

  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }

  document.getElementById("reversedOutput").textContent =
    "Reversed String: " + reversed;
}


// Palindrome Function
function checkPalindrome() {
  const input = document.getElementById("palindromeInput").value;
  let reversed = "";

  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }

  if (input === reversed) {
    document.getElementById("palindromeOutput").textContent = "✅ It is a Palindrome!";
  } else {
    document.getElementById("palindromeOutput").textContent = "❌ Not a Palindrome!";
  }
}


// Tip Calculator Function
function calculateTotal() {
    // Get the input values
    const subtotal = parseFloat(document.getElementById('subtotalInput').value);
    const tipPercent = parseFloat(document.getElementById('tipInput').value);
    const totalOutput = document.getElementById('totalOutput');

    // Validate input
    if (isNaN(subtotal) || isNaN(tipPercent)) {
        totalOutput.textContent = "Please enter valid numbers!";
        return;
    }

    // Calculate tip and total
    const tipAmount = subtotal * (tipPercent / 100);
    const total = subtotal + tipAmount;

    // Display result
    totalOutput.textContent = `Subtotal: $${subtotal.toFixed(2)}, Tip: $${tipAmount.toFixed(2)}, Total: $${total.toFixed(2)}`;
}
