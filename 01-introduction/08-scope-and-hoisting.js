// scope-hoisting.js - Understanding Scope and Hoisting in JavaScript

/*
- Scope: Refers to where variables and functions are accessible in your code. JavaScript has different types of scopes:
       1- Global Scope: Accessible anywhere in the program.
       2- Function Scope: Variables declared inside a function are accessible only within that function.
       3- Block Scope: Variables declared with let and const inside a block {} are only accessible within that block.

- Hoisting: The JavaScript engine moves variable and function declarations to the top of their respective scopes during the compilation phase. This behavior is known as "hoisting."
*/

/*
Note:

Hoisting is not limited to var only; 
it also happens with let and const, but with a key difference.
 With var, variables are hoisted and initialized as undefined, 
 while let and const are hoisted but not initialized, leading to a ReferenceError
 if accessed prematurely.
*/



// 1️⃣ Global Scope Example
let globalVar = "I am a global variable!";  // This can be accessed anywhere in the program
function showGlobalVar() {
    console.log(globalVar);
}

showGlobalVar();  // Output: I am a global variable!

// 2️⃣ Function Scope Example
function functionScopeExample() {
    let localVar = "I am a local variable!";
    console.log(localVar);  // This will work as it's within the same function scope
}

functionScopeExample();  // Output: I am a local variable!

// Uncommenting the following line will throw an error because localVar is not accessible outside the function
// console.log(localVar);  // Error: localVar is not defined

// 3️⃣ Block Scope Example with `let` and `const`
if (true) {
    let blockVar = "I am block-scoped with let!";
    const blockConst = "I am block-scoped with const!";
    console.log(blockVar);  // Output: I am block-scoped with let!
    console.log(blockConst);  // Output: I am block-scoped with const!
}

// Uncommenting the following lines will throw an error because blockVar and blockConst are not accessible outside the block
// console.log(blockVar);  // Error: blockVar is not defined
// console.log(blockConst);  // Error: blockConst is not defined

// 4️⃣ Hoisting Example with `var` (Only declarations are hoisted, not the assignments)
console.log(hoistedVar);  // Output: undefined (due to hoisting)
var hoistedVar = "This is hoisted!";
console.log(hoistedVar);  // Output: This is hoisted!

// 5️⃣ Hoisting Example with `let` and `const` (Declarations are hoisted, but not initialized)
try {
    console.log(hoistedLet);  // Error: Cannot access 'hoistedLet' before initialization
} catch (e) {
    console.log(e.message);  // Output: Cannot access 'hoistedLet' before initialization
}

let hoistedLet = "This will throw an error";

