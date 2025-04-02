// conditions.js - Demonstrating Conditional Statements in JavaScript

// 1️⃣ if statement - Checks a condition and runs the block of code if true
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

// 2️⃣ if-else statement - Executes one block if true, another if false
let weather = "sunny";
if (weather === "sunny") {
    console.log("It's a sunny day!");
} else {
    console.log("It's not sunny today.");
}

// 3️⃣ if-else if-else statement - Checks multiple conditions
let day = "Monday";
if (day === "Monday") {
    console.log("Today is Monday.");
} else if (day === "Tuesday") {
    console.log("Today is Tuesday.");
} else {
    console.log("It's another day.");
}

// 4️⃣ Switch Case - A more readable way to handle multiple conditions
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("You chose apple.");
        break;
    case "banana":
        console.log("You chose banana.");
        break;
    case "orange":
        console.log("You chose orange.");
        break;
    default:
        console.log("You chose something else.");
}

