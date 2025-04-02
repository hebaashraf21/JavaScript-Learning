// Selecting elements using different DOM methods
document.getElementById("selectButton").addEventListener("click", function () {
    // 1️⃣ Selecting by ID
    let title = document.getElementById("title");
    console.log("Selected by ID:", title);

    // 2️⃣ Selecting by Class Name
    let description = document.getElementsByClassName("description");
    console.log("Selected by Class Name:", description[0]);

    // 3️⃣ Selecting by Tag Name
    let paragraphs = document.getElementsByTagName("p");
    console.log("Selected by Tag Name:", paragraphs[0]);

    // 4️⃣ Query Selector (returns first match)
    let firstParagraph = document.querySelector("p");
    console.log("Selected by querySelector:", firstParagraph);

    // 5️⃣ Query Selector All (returns NodeList of all matches)
    let allParagraphs = document.querySelectorAll("p");
    console.log("Selected by querySelectorAll:", allParagraphs);
});
