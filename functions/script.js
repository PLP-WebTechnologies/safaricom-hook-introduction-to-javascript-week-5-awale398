// Function to greet the user
function greetUser(name) {
    return "Hello, " + name + "! Welcome to Abdiawal`s Creations the innovator of the future.";
  }
  function displayGreeting() {
    let userName = prompt("Enter your name:");
    
    let message = greetUser(userName);
    
    // Display the message in the HTML element with id="greeting"
    document.getElementById("greeting").textContent = message;
  }
  