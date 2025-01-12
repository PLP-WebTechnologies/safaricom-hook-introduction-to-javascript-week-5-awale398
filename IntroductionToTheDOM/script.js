// Change the text of the <h1> element
document.querySelector("h1").textContent = "JavaScript in Action!";

// Add a new <p> element inside the <div> with id "dynamic-content"
const dynamicDiv = document.getElementById("dynamic-content");

// Create a new <p> element
const newParagraph = document.createElement("p");

// Set the text content of the new <p> element
newParagraph.textContent = "This content was added dynamically using JavaScript.";

// Append the new <p> to the dynamic-content <div>
dynamicDiv.appendChild(newParagraph);
