// 01-asynchronous.js - Understanding Callbacks, Promises, and Async/Await

/*
Asynchronous JavaScript allows you to perform non-blocking operations.
This is crucial when dealing with operations like file I/O, network requests, or timers.
We'll cover the evolution of asynchronous programming from callbacks to promises and async/await.
*/

// 1️⃣ Callback Example
console.log("Start of callback example");

// Callback function fetches data after a delay of 2 seconds using setTimeout
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched after 2 seconds");  // This callback is executed after 2 seconds
    }, 2000);
}

// Calling fetchData and passing a callback function to handle the result
fetchData(function (data) {
    console.log(data);  // Output: Data fetched after 2 seconds
});

console.log("End of callback example");  // This prints immediately after calling fetchData

// Explanation: 
// The code doesn't wait for the callback to execute before moving on to the next line of code.
// The output order is: "Start of callback example", "End of callback example", then after 2 seconds: "Data fetched after 2 seconds".


// 2️⃣ Promise Example
console.log("\nStart of promise example");

// A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched from promise");  // Resolving the promise with a success message after 2 seconds
    }, 2000);
});

// The .then() method is called when the promise is resolved, and .catch() handles any errors.
promise
    .then((data) => console.log(data))  // Output: Data fetched from promise
    .catch((error) => console.error(error));  // If there's an error, it would be logged here.

console.log("End of promise example");  // This prints immediately after creating the promise

// Explanation:
// Promises allow handling asynchronous results in a cleaner way than callbacks by chaining .then() and .catch() methods.
// The output order is: "Start of promise example", "End of promise example", then after 2 seconds: "Data fetched from promise".


// 3️⃣ Async/Await Example
console.log("\nStart of async/await example");

// Async function allows the use of the `await` keyword to pause execution until a Promise is resolved
async function fetchDataAsync() {
    let data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched with async/await");  // Resolving the promise after 2 seconds
        }, 2000);
    });

    // After the Promise resolves, the data is logged
    console.log(data);  // Output: Data fetched with async/await
}

// Calling the async function to fetch data
fetchDataAsync();

console.log("End of async/await example");  // This prints immediately after calling the async function

// Explanation:
// The `await` keyword pauses the function's execution until the Promise resolves, ensuring that the result is available before moving on.
// This syntax makes asynchronous code look and behave like synchronous code.
// The output order is: "Start of async/await example", "End of async/await example", then after 2 seconds: "Data fetched with async/await".

