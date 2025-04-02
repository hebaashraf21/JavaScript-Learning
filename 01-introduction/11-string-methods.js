// string-methods.js - Understanding String Methods in JavaScript

// 1️⃣ Creating a String
let sentence = "JavaScript is awesome!";
let word = "hello";

// 2️⃣ Accessing String Length
console.log(sentence.length);  // Output: 22 (Number of characters in the string)

// 3️⃣ Converting to Uppercase & Lowercase
console.log(sentence.toUpperCase());  // Output: JAVASCRIPT IS AWESOME!
console.log(sentence.toLowerCase());  // Output: javascript is awesome!

// 4️⃣ Slicing Strings
let slicedString = sentence.slice(0, 10);  // Extracts the first 10 characters
console.log(slicedString);  // Output: JavaScript

// 5️⃣ Replacing Substring
let newSentence = sentence.replace("awesome", "fantastic");
console.log(newSentence);  // Output: JavaScript is fantastic!

// 6️⃣ Splitting a String into an Array
let words = sentence.split(" ");  // Splits by space
console.log(words);  // Output: [ 'JavaScript', 'is', 'awesome!' ]

