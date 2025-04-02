/*
JavaScript Modules allow you to split your code into multiple files, 
so that each file can export functions, objects, or values and import them into other files.
This modular approach makes it easier to manage and maintain your code.
Let's explore the `import` and `export` syntax.
*/


// 2️⃣ Importing from a Module (Named Import)
import { greet, age } from '../utils/greet.js';  // Importing specific exports from greet.js

console.log(age);  // Output: 25
greet("Alice");    // Output: Hello, Alice!


// 4️⃣ Importing Default Export
import sayGoodbye from '../utils/sayGoodbye.js';  // Importing the default export

sayGoodbye("Bob");  // Output: Goodbye, Bob!

// 5️⃣ Using Modules in Browser
/*
To use modules in the browser, we use type="module" in the script tag in HTML.
For example:
<script type="module" src="app.js"></script>
*/


