// 1️⃣ Simple Fetch API Example
// Fetching data from a public API and displaying the result on the page.

document.getElementById('loadData').addEventListener('click', () => {
    // Using the Fetch API to make a GET request to the JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {  // Check if the response is successful
                throw new Error('Network response was not ok');
            }
            return response.json();  // Parse the response as JSON
        })
        .then(data => {
            // Display the data in the paragraph element
            document.getElementById('data').innerText = `Title: ${data.title}\nBody: ${data.body}`;
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            console.error('Fetch error:', error);
            document.getElementById('data').innerText = 'Failed to load data.';
        });
});


