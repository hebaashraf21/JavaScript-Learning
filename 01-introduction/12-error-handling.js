// error-handling.js - Understanding Error Handling in JavaScript


/*
1- try...catch: Used to handle errors that may occur in a block of code.
2- throw: Allows you to create custom error messages.
3- finally: Used for code that must execute regardless of an error.
*/

// 1️⃣ Basic Error Handling with try...catch
try {
    let result = 10 / 0;  // This will result in Infinity, which is not an error.
    console.log(result);
} catch (error) {
    console.error("An error occurred: ", error.message);  // This will catch any error
} finally {
    console.log("Finally block executed");  // This will execute regardless of an error
}

// 2️⃣ Throwing a Custom Error
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older.");
    } else {
        console.log("Age is valid.");
    }
}

try {
    checkAge(16);  // This will throw an error
} catch (error) {
    console.error(error.message);  // Output: Age must be 18 or older.
}

// 3️⃣ Handling Specific Errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));  // This will throw an error
} catch (error) {
    console.error(error.message);  // Output: Cannot divide by zero.
}


