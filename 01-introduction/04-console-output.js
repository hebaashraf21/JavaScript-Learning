// console-output.js - Using Console Methods for Debugging and Displaying Data

// 1️⃣ console.log() - Used to log information to the console
console.log("This is a simple log message!");

// Example: Logging a variable value
let message = "Hello, world!";
console.log("Message:", message);

// 2️⃣ console.error() - Used to display error messages (often in red)
console.error("Oops! Something went wrong!");

// Example: Logging an error with a description
let age = -5;
if (age < 0) {
    console.error("Error: Age cannot be negative!");
}

// 3️⃣ console.table() - Displays data in a table format for better visualization
let user = {
    name: "Alice",
    age: 25,
    country: "Cairo"
};
console.table(user);

// Example: Logging an array of objects in table format
let users = [
    { name: "Alice", age: 25, country: "Cairo" },
    { name: "Bob", age: 30, country: "London" },
    { name: "Charlie", age: 35, country: "New York" }
];
console.table(users);

