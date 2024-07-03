// Control Flow Structures

// 1. Conditional Statement: if, else if, else
// Allow us to execute different blocks of code based on a condition.
let temperature = 38;

if (temperature < 0) {
    // Group of statements
    console.log("It's freezing.");
} else if (temperature >= 0 && temperature < 20){
    // 0 - 19
    console.log("It's cool outside.");
} else if (temperature >= 20 && temperature < 30){
    // 20 - 29
    console.log("It's warm outside.");
} else {
    console.log("It's hot outside.");
}

// 2. Conditional: switch-case statement
// Repeatedly execute a block of code until a specific condition is met.
let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's the end of the week days.");
        break;
    default:
        console.log("It's a regular day.");
}

// 2. Looping Statements:

// for loop
// 1st: Variable Initialization
// 2nd: Condition Expression
// 3rd: Increment/ Decrement
for (let i = 1; i <= 5; i++) {
    console.log("For loop count:", i);
}

// while loop
let count = 6;
while (count <= 5){
    count++;
    console.log("While loop count:", count);
}

// do-while loop
let counter = 6;
do {
    console.log("Do while loop count:", counter);
    counter++;
} while (counter <= 5);