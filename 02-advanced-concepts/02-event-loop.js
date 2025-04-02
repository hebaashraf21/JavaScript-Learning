/*
JavaScript uses a single-threaded event loop to handle asynchronous operations.
The event loop manages the execution of code, events, and messages in the queue.
Let's break down how it works with an example.
*/

// 1️⃣ Simple Event Loop Example

console.log("Start of the script");

setTimeout(() => {
    console.log("This is executed after 0ms, but queued in the event loop.");
}, 0);  // Timer set to 0ms (but still queued in the event loop)

console.log("End of the script");

// 2️⃣ Explanation of Execution Order

/*
1. "Start of the script" is logged first because it's the first synchronous line.
2. `setTimeout` is an asynchronous function, so the callback is added to the event queue after the specified delay (even if it's 0ms).
3. "End of the script" is logged next because it's synchronous code that runs immediately.
4. The callback from `setTimeout` is executed after the synchronous code has finished executing, even though the timer is set to 0ms. This happens because the event loop processes the queue after all synchronous code completes.

Asynchronous code in JavaScript runs in the event loop, not blocking the main thread.
*/

// 3️⃣ Understanding the Event Loop with Asynchronous Functions

console.log("Start of second example");

setTimeout(() => {
    console.log("This message is logged after 2 seconds.");
}, 2000);  // Timer set to 2 seconds (asynchronous)

console.log("End of second example");

// After 2 seconds, "This message is logged after 2 seconds." will be printed
// Even though the timer is set to 2 seconds, the synchronous code runs first, and the asynchronous callback is queued.


// 4️⃣ Call Stack and Event Queue Explanation
/*
The event loop works with:
1. **Call Stack**: A stack of functions that need to be executed. Synchronous code is executed here.
2. **Web APIs (like setTimeout, fetch)**: The environment that provides asynchronous operations.
3. **Callback Queue**: A queue where asynchronous callback functions wait to be executed after the call stack is empty.

When an asynchronous operation is completed, the callback function is moved to the callback queue.
Once the call stack is empty, the event loop moves the callback from the queue to the call stack and executes it.

*/

