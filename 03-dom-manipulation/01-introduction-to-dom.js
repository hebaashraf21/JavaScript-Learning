// 01-introduction-to-dom.js - Introduction to the DOM (Document Object Model)

/*
The DOM represents the document as a tree of nodes. Each element, attribute, and piece of text in an HTML document is represented as a node.
JavaScript can interact with the DOM to change the content, structure, and style of a web page.
*/

// 1️⃣ What is the DOM?
// The DOM is an interface that allows JavaScript to access the document's structure and content.

// Example: Accessing the document's title
console.log(document.title);  // Output: The title of the current web page

// Example: Accessing the document's body
console.log(document.body);   // Output: The body element of the web page

// 2️⃣ DOM Tree Structure
/*
The DOM represents the document as a tree-like structure. Each part of the page (elements, attributes, text, etc.) is a node.
- The `document` object is the root node.
- Each HTML element is represented as an element node.
- Text within an element is a text node.
- Attributes are represented as attribute nodes.
*/

// 3️⃣ DOM Methods for Accessing Elements
// JavaScript provides several methods to access and manipulate DOM elements.
// Common methods to access elements:
console.log(document.getElementById("myId"));  // Gets element by ID
console.log(document.getElementsByClassName("myClass"));  // Gets elements by class
console.log(document.getElementsByTagName("div"));  // Gets elements by tag name


