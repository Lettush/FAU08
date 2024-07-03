// Arrays and Array methods
// Array - allows us to store multiple values in a single variable

// Creating an array
let fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];
console.log(fruits);

// Accessing array elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);

// Getting the last element (length)
console.log(fruits.length);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Modifying/Updating Array indexes
fruits[1] = "Grapes";
console.log(fruits);

// Add another element (push())
fruits.push("Kiwi", "Durian", "Dragonfruit");
console.log(fruits);

// Remove the last element (pop())
console.log(fruits.pop());
console.log(fruits);

// Remove a specific element (splice())
// splice(index, how many to remove)
fruits.splice(2, 1)
console.log(fruits);

// For loops with arrays
let numbers = [1,2,3,4,5];

for (let i = 0; i < numbers.length; i++) {
    console.log("Number " + (i + 1) + ":", numbers[i]);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// forEach method
let colors = ["red", "green", "blue"];
colors.forEach(function (color) {
    console.log(color);
})

// indexof() - gets the index of a specific value
console.log("Index of 3:", numbers.indexOf(3));
console.log("Index of 6:", numbers.indexOf(6));

// includes() - true if value is in array, and false if not
console.log("Includes 4:", numbers.includes(4));

// join() - convert your array values into a string
// join("symbol for separation of values")
console.log("Joined array:", colors.join("/"));

// .slice - extract a portion of an array to make a new array
// slice(start, end [not included])
let slicedArray = numbers.slice(undefined, 2);
slicedArray = numbers.slice(1, 3);
console.log(slicedArray);