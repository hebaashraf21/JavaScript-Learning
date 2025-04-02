// Geolocation API Example

document.getElementById('getLocation').addEventListener('click', function () {
    // Checking if geolocation is available in the browser
    if (navigator.geolocation) {
        // Requesting the current position of the user
        navigator.geolocation.getCurrentPosition(function (position) {
            // Success: showing latitude and longitude
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.getElementById('location').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
        }, function (error) {
            // Error handling: if geolocation request fails
            console.error("Error occurred while retrieving location:", error);
            document.getElementById('location').textContent = "Unable to retrieve your location.";
        });
    } else {
        // If geolocation is not supported by the browser
        document.getElementById('location').textContent = "Geolocation is not supported by this browser.";
    }
});
