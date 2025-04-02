// Selecting elements
const heading = document.getElementById('header');
const paragraph = document.getElementById('paragraph');

// Changing text content
document.getElementById('changeText').addEventListener('click', () => {
    heading.textContent = "Heading Changed!";
    paragraph.textContent = "This paragraph text has been updated.";
});

// Changing styles
document.getElementById('changeStyle').addEventListener('click', () => {
    heading.style.color = "red";
    heading.style.fontSize = "28px";
    paragraph.style.fontStyle = "italic";
    paragraph.style.backgroundColor = "lightgray";
});
