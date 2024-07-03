// Step 1: Targetting elements

// Old way
// getElementById, getElementsByClassName, getElementsByTagName
let elementWithId = document.getElementById("first-div");
console.log(elementWithId);

let elementsWithClass = document.getElementsByClassName("sample-div");
console.log(elementsWithClass);
console.log(elementsWithClass[0]);

let listItems = document.getElementsByTagName("li");
console.log("List items:", listItems);

// New way
// querySelector, querySelectorAll

// querySelector - first occurence of ANY target string
let orderedListItem = document.querySelector(".ordered-list");
console.log(orderedListItem);

let listItem = document.querySelector("li");
console.log(listItem);

// querySelectorAll - ALL occurences of a target string
orderedListItem = document.querySelectorAll(".ordered-list");
console.log(orderedListItem);

listItem = document.querySelectorAll("li");
console.log(listItem);

// Step 2: Modifying/Manipulation

// Changing CSS styles (.style.<property to change>)
let headings = document.querySelectorAll("h3");
headings[0].style.color = "aqua";
headings[0].style.backgroundColor = "black";

// Looping through html element collections
headings.forEach(function(heading) {
    heading.style.color = "aqua";
    heading.style.backgroundColor = "black";
})

// Update elements attributes
let dayNightIcon = document.querySelector("#day-night-icon");

// setAttribute(name, value)
dayNightIcon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3688/3688129.png");

// getAttribute(name)
console.log(dayNightIcon.getAttribute("src"));

/* 
    HOW TO APPEND!
    1. Creating Element
    2. Changing its properties
    3. Append to an existing element
*/

// Appending and Removing Elements
let parentElement = document.querySelector("#parent-element");
let newElement = document.createElement("div");

// Change its properties
newElement.textContent = "Child Element";
parentElement.appendChild(newElement);

// Removing elements
let elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

// Step 3: Event Listeners
let darkModeBtn = document.querySelector("#dark-mode-btn");

// Adding Event Listener (event, function)
darkModeBtn.addEventListener("click", function() {
    let pageContainer = document.querySelector("#page-container");
    let pageModeText = document.querySelector("#page-mode-text");

    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";

    pageModeText.textContent = "Dark Mode";
})