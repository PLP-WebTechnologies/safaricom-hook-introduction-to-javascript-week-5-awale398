// Function to check if the user is eligible to vote
function checkEligibility() {
    let age = parseInt(prompt("Enter your age:"));
  
    if (isNaN(age)) {
      alert("Please enter a valid age.");
      return;
    }
  
    // Use an if statement to check voting eligibility
    let message;
    if (age >= 18) {
      message = "Hurray! You are eligible to vote!";
    } else {
      message = "Sorry! You are not eligible to vote yet.";
    }
  
    // Display the message in the HTML element with id="eligibilityMessage"
    document.getElementById("eligibilityMessage").textContent = message;
  }
  