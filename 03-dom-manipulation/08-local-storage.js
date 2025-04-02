// Save the entered name into Local Storage when the save button is clicked
document.getElementById('saveBtn').addEventListener('click', () => {
    // Get the value entered in the input field
    const username = document.getElementById('username').value;

    // Store the username in Local Storage under the key 'username'
    localStorage.setItem('username', username);

    // Notify the user that the data has been saved
    alert('Name saved in Local Storage!');
});

// Load the saved name from Local Storage when the load button is clicked
document.getElementById('loadBtn').addEventListener('click', () => {
    // Retrieve the username from Local Storage
    const username = localStorage.getItem('username');

    // Check if there is a saved username in Local Storage
    if (username) {
        // If found, display the saved name
        alert(`Hello, ${username}!`);
    } else {
        // If no name is found, inform the user
        alert('No name saved in Local Storage!');
    }
});
