// Save the entered data into Session Storage when the save button is clicked
document.getElementById('saveSessionBtn').addEventListener('click', () => {
    // Get the value entered in the input field
    const data = document.getElementById('sessionData').value;

    // Store the data in Session Storage under the key 'sessionData'
    sessionStorage.setItem('sessionData', data);

    // Notify the user that the data has been saved
    alert('Data saved in Session Storage!');
});

// Load the saved data from Session Storage when the load button is clicked
document.getElementById('loadSessionBtn').addEventListener('click', () => {
    // Retrieve the data from Session Storage
    const data = sessionStorage.getItem('sessionData');

    // Check if there is saved data in Session Storage
    if (data) {
        // If found, display the saved data
        alert(`Session data: ${data}`);
    } else {
        // If no data is found, inform the user
        alert('No data saved in Session Storage!');
    }
});
