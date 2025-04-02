// Event: Click Event on Box
const box = document.getElementById('box');
box.addEventListener('click', function () {
    // Toggle the background color when the box is clicked
    box.classList.toggle('clicked');
});

// Event: Mouseover Event on Button
const mouseButton = document.getElementById('mouseEvent');
mouseButton.addEventListener('mouseover', function () {
    alert('Mouse Over Event Triggered!');
});

// Event: Keypress Event (Detect "Enter" key)
const keyButton = document.getElementById('keyEvent');
keyButton.addEventListener('click', function () {
    // Listen for the "Enter" key when the button is clicked
    window.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            alert('Enter key pressed!');
        }
    });
});
