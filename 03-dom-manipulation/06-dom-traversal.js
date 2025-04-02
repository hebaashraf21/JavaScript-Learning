const childElements = document.querySelectorAll(".child");
const parentElement = document.querySelector(".parent");

// Find Parent
document.getElementById("findParent").addEventListener("click", function () {
    alert("Parent of Child 1: " + childElements[0].parentElement.className);
});

// Find Children
document.getElementById("findChildren").addEventListener("click", function () {
    const children = parentElement.children;
    alert(`Parent has ${children.length} children`);
});

// Find Siblings
document.getElementById("findSiblings").addEventListener("click", function () {
    let siblingText = "";
    let nextSibling = childElements[0].nextElementSibling;
    while (nextSibling) {
        siblingText += nextSibling.textContent + "\n";
        nextSibling = nextSibling.nextElementSibling;
    }
    alert("Siblings of Child 1:\n" + siblingText);
});
