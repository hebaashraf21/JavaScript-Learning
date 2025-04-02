// functions.js - Introduction to Functions in JavaScript

// 1️⃣ Function Declaration - A named function that performs a task
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Calling the function with an argument
greet("Alice");  // Output: Hello, Alice!

// 2️⃣ Function Expression - A function assigned to a variable
const add = function (a, b) {
    return a + b;
};

// Calling the function expression
let result = add(5, 3);
console.log("Sum:", result);  // Output: Sum: 8

// 3️⃣ Arrow Function (ES6) - A shorter way to write functions
const multiply = (a, b) => a * b;

// Calling the arrow function
let product = multiply(4, 2);
console.log("Product:", product);  // Output: Product: 8

// 4️⃣ Function with Default Parameters - Parameters with default values
function greetWithTime(name, timeOfDay = "morning") {
    console.log(`Good ${timeOfDay}, ${name}!`);
}

// Calling the function with and without the second argument
greetWithTime("Alice", "afternoon");  // Output: Good afternoon, Alice!
greetWithTime("Bob");  // Output: Good morning, Bob!

// 5️⃣ Return Statement - Returning a value from a function
function square(x) {
    return x * x;
}

// Calling the function and storing the returned value
let squareResult = square(5);
console.log("Square of 5:", squareResult);  // Output: Square of 5: 25

