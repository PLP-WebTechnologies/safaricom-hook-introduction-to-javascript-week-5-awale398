// Simple calculator function
function simpleCalculator() {
    // Prompt the user for input
    let firstNumber = parseFloat(prompt("Enter the first number:"));
    let secondNumber = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");
  
    // Check if inputs are valid numbers
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    let result;
  
    // Perform the calculation based on the chosen operation
    switch (operation) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        // Check for division by zero
        if (secondNumber === 0) {
          alert("Error: Division by zero is not allowed.");
          return;
        }
        result = firstNumber / secondNumber;
        break;
      default:
        alert("Invalid operation. Please choose one of the following: +, -, *, /.");
        return;
    }
  
    // Show the result
    alert("Result: " + result);
  }
  
  // Call the function
  simpleCalculator();
  