// arrays.js - Understanding Arrays in JavaScript

// 1️⃣ Creating Arrays
let fruits = ["Apple", "Banana", "Cherry"];  // Array literal
let numbers = new Array(1, 2, 3, 4, 5);     // Array constructor

console.log(fruits);  // Output: ["Apple", "Banana", "Cherry"]
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// 2️⃣ Accessing Array Elements (Zero-indexed)
console.log(fruits[0]);  // Output: Apple (First element)
console.log(fruits[2]);  // Output: Cherry (Third element)

// 3️⃣ Array Methods: Adding/Removing Elements
fruits.push("Orange");  // Adds to the end of the array
console.log(fruits);  // Output: ["Apple", "Banana", "Cherry", "Orange"]

fruits.pop();  // Removes the last element
console.log(fruits);  // Output: ["Apple", "Banana", "Cherry"]

fruits.shift();  // Removes the first element
console.log(fruits);  // Output: ["Banana", "Cherry"]

fruits.unshift("Grape");  // Adds to the beginning of the array
console.log(fruits);  // Output: ["Grape", "Banana", "Cherry"]

// 4️⃣ Array Methods: Iterating Over Arrays
// Using forEach to iterate through an array
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}: ${fruit}`);
});

// Output:
// 1: Grape
// 2: Banana
// 3: Cherry

// 5️⃣ Array Methods: map() and filter()
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4]

