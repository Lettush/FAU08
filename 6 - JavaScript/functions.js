// Functions:
// Reusable block of code that you can run whenever you need it.

function greet() {
    // Group of statements
    console.log("Hello and welcome to world of functions!");
    console.log("Let's gooooo!!!");
}

// Calling a function
greet();
greet();
greet();

// 2. Functions with parameters
// Parameters: variable that will hold values.
// Arguments: values that you pass to a functions parameters.

function sum(num1, num2){
    // Group of statements
    console.log("Calculating the value...");
    return num1 + num2;
}

// Calling a function with parameters
console.log("Sum:", sum(10, 5));
console.log("Sum:", sum(20, 30));