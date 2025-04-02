// operators.js - Exploring JavaScript Operators

// Operators allow us to perform operations on variables and values.

// 1️⃣ Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition:", a + b);       // 15
console.log("Subtraction:", a - b);    // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b);       // 2
console.log("Modulus (Remainder):", a % b); // 0
console.log("Exponentiation:", a ** b); // 10^5 = 100000

// 2️⃣ Assignment Operators
let x = 20;
x += 10; // Same as x = x + 10
console.log("x after += 10:", x); // 30

x -= 5;  // Same as x = x - 5
console.log("x after -= 5:", x); // 25

x *= 2;  // Same as x = x * 2
console.log("x after *= 2:", x); // 50

x /= 5;  // Same as x = x / 5
console.log("x after /= 5:", x); // 10

// 3️⃣ Comparison Operators (Return Boolean Values)
console.log("Is a equal to b?", a == b); // false
console.log("Is a NOT equal to b?", a != b); // true
console.log("Is a greater than b?", a > b); // true
console.log("Is a less than or equal to b?", a <= b); // false

// 4️⃣ Strict Comparison (=== and !==)
console.log("10 == '10'?", 10 == "10"); // true (loose equality)
console.log("10 === '10'?", 10 === "10"); // false (strict equality)
console.log("10 !== '10'?", 10 !== "10"); // true (strict inequality)

// 5️⃣ Logical Operators (AND, OR, NOT)
let isAdult = true;
let hasID = false;

console.log("AND (&&):", isAdult && hasID); // false (Both must be true)
console.log("OR (||):", isAdult || hasID);  // true (At least one is true)
console.log("NOT (!):", !isAdult); // false (Reverses value)

// 6️⃣ Increment & Decrement Operators
let count = 5;
console.log("Post-Increment:", count++); // Prints 5, then increases
console.log("After Post-Increment:", count); // Now count is 6

count = 5;
console.log("Pre-Increment:", ++count); // Increases first, then prints 6

// 7️⃣ Ternary Operator (Short If-Else)
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Ternary Result:", status); // "Adult"

