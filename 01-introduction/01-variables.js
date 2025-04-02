// variables.js - Understanding Variables in JavaScript

// JavaScript allows you to declare variables using var, let, and const.
// Let's explore the differences!

// 1️⃣ Using `var` (Old Way - Avoid Using It)
var name = "Alice";
console.log("Name:", name);

// `var` does NOT have block scope and can be re-declared
var name = "Bob";
console.log("Updated Name:", name); // No error, but not recommended!

// 2️⃣ Using `let` (Modern Way)
let age = 25;
console.log("Age:", age);

// `let` allows updating values but NOT redeclaring in the same scope
age = 30;
console.log("Updated Age:", age);

// 3️⃣ Using `const` (For Constants)
const country = "Egypt";
console.log("Country:", country);

// ❌ ERROR: You cannot reassign a `const` variable
// country = "USA"; // ❌ This will throw an error!

// 📌 Variable Scope Example
if (true) {
    var x = 10;  // `var` is function-scoped
    let y = 20;  // `let` is block-scoped
}
console.log("x (var):", x); // ✅ Accessible (not recommended)
// console.log("y (let):", y); // ❌ Error! `y` is block-scoped

// ✅ Best Practices
// - Use `const` by default, unless you need to change the value.
// - Use `let` for variables that may change.
// - Avoid `var` to prevent scope-related bugs.

console.log("✅ Variables lesson completed!");
