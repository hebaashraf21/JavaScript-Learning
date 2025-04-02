// 1️⃣ Changing Text Content
document.getElementById("changeText").addEventListener("click", function () {
    let paragraph = document.getElementById("paragraph");
    paragraph.textContent = "Text has been changed!";
});

// 2️⃣ Modifying Styles
document.getElementById("changeColor").addEventListener("click", function () {
    let title = document.getElementById("title");
    title.classList.toggle("red-text");  // Toggles the red-text class
});

// 3️⃣ Adding Elements Dynamically
document.getElementById("addElement").addEventListener("click", function () {
    let newElement = document.createElement("p");
    newElement.textContent = "New dynamically added paragraph!";
    document.getElementById("container").appendChild(newElement);
});

// 4️⃣ Removing Elements
document.getElementById("removeElement").addEventListener("click", function () {
    let container = document.getElementById("container");
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});
