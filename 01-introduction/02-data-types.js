// data-types.js - Exploring JavaScript Data Types

// JavaScript has different types of data. Let's explore them!

// 1️⃣ String (Text Data)
let name = "Alice";
console.log("String:", name);
console.log("Type:", typeof name); // string

// 2️⃣ Number (Integer & Floating Point)
let age = 25;
let price = 99.99;
console.log("Number (Integer):", age);
console.log("Number (Float):", price);
console.log("Type:", typeof age); // number

// 3️⃣ Boolean (True/False Values)
let isStudent = true;
let hasLicense = false;
console.log("Boolean:", isStudent, hasLicense);
console.log("Type:", typeof isStudent); // boolean

// 4️⃣ Undefined (Variable Declared but Not Assigned)
let notAssigned;
console.log("Undefined:", notAssigned);
console.log("Type:", typeof notAssigned); // undefined

// 5️⃣ Null (Intentional Empty Value)
let emptyValue = null;
console.log("Null:", emptyValue);
console.log("Type:", typeof emptyValue); // object (known JavaScript bug)

// 6️⃣ Object (Collection of Key-Value Pairs)
let person = { name: "Alice", age: 25, city: "Cairo" };
console.log("Object:", person);
console.log("Type:", typeof person); // object

// 7️⃣ Array (List of Items)
let colors = ["red", "green", "blue"];
console.log("Array:", colors);
console.log("Type:", typeof colors); // object (arrays are objects)

// 8️⃣ Symbol (Unique Identifiers)
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);
console.log("Type:", typeof uniqueId); // symbol

// 9️⃣ BigInt (For Very Large Numbers)
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber);
console.log("Type:", typeof bigNumber); // bigint

