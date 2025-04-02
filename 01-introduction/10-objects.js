// objects.js - Understanding Objects in JavaScript

// 1️⃣ Creating an Object
let person = {
    firstName: "John",  // Property: firstName with value "John"
    lastName: "Doe",    // Property: lastName with value "Doe"
    age: 30,            // Property: age with value 30
    greet: function () {  // Method: greet function inside the object
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
};

// Accessing Object Properties
console.log(person.firstName);  // Output: John
console.log(person["age"]);     // Output: 30

// Accessing and Calling Object Method
person.greet();  // Output: Hello, John Doe!

// 2️⃣ Modifying Object Properties
person.age = 31;  // Changing age property
console.log(person.age);  // Output: 31

// 3️⃣ Adding New Properties
person.email = "john.doe@example.com";  // Adding new email property
console.log(person.email);  // Output: john.doe@example.com

// 4️⃣ Deleting Object Properties
delete person.email;  // Deleting email property
console.log(person.email);  // Output: undefined

// 5️⃣ Nested Objects
let student = {
    name: "Alice",
    courses: {
        math: "A",
        science: "B"
    }
};

console.log(student.courses.math);  // Output: A
