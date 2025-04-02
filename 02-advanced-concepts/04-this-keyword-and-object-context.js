// 01-this-keyword.js - Understanding the 'this' Keyword and Object Context

// 1️⃣ Global Context (Outside Any Function)
console.log(this); // In a browser, this refers to the 'window' object
// In Node.js, 'this' refers to the 'global' object.

// 2️⃣ Inside a Regular Function (Non-strict mode)
function regularFunction() {
    console.log(this);  // In a browser, 'this' refers to the 'window' object
}
regularFunction();  // Output: window (or global in Node.js)

// 3️⃣ Inside an Object Method
const person = {
    firstName: "John",
    lastName: "Doe",
    greet: function () {
        console.log(this); // Here, 'this' refers to the 'person' object
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
};
person.greet();
// Output: 
// { firstName: 'John', lastName: 'Doe', greet: [Function: greet] }
// Hello, John Doe!

// 4️⃣ Arrow Functions and 'this' (Lexical Scoping)
const person2 = {
    firstName: "Jane",
    lastName: "Doe",
    greet: () => {
        console.log(this); // In arrow functions, 'this' is lexically bound (it refers to the outer context)
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
};
person2.greet();
// Output:
// {} (In browsers, this refers to the window object because arrow functions don’t have their own 'this')
// Hello, undefined undefined!


// 6️⃣ 'this' in Constructor Functions and Classes
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.greet = function () {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    };
}

const person3 = new Person("Sam", "Smith");
person3.greet();  // Output: Hello, Sam Smith!

// 7️⃣ Explicit Binding: call(), apply(), and bind()
const person4 = {
    firstName: "Alice",
    lastName: "Johnson"
};

// Using 'call' method to invoke greet() with explicit 'this' binding
function greetPerson() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
}

greetPerson.call(person4);  // Output: Hello, Alice Johnson!

// Using 'apply' method to invoke greet() with explicit 'this' binding and arguments
greetPerson.apply(person4);  // Output: Hello, Alice Johnson!

// Using 'bind' to create a new function with 'this' explicitly bound to person4
const boundGreet = greetPerson.bind(person4);
boundGreet();  // Output: Hello, Alice Johnson!

// 5️⃣ 'this' in Event Handlers  // Open index.html in a browser to see the output
const button = document.createElement('button');
button.innerHTML = "Click me";
document.body.appendChild(button);

button.addEventListener('click', function () {
    console.log(this); // Inside event handler, 'this' refers to the DOM element (button) that triggered the event
    console.log("Button clicked");
});
// Output: The 'button' element object when clicked



