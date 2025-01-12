// Function to generate a list of numbers from 1 to 10
function displayNumbers() {
    const listElement = document.getElementById("numberList");
  
    // Loop through numbers from 1 to 10
    for (let i = 50; i <= 100; i++) {
      // Create a new list item
      let listItem = document.createElement("li");
      // Set the text of the list item to the current number
      listItem.textContent = i;
      // Append the list item to the ordered list
      listElement.appendChild(listItem);
    }
  }
  
  // Call the function to display numbers when the page loads
  window.onload = displayNumbers;
  