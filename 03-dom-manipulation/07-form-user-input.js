const form = document.getElementById("userForm");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    output.textContent = `Submitted: Name - ${name}, Email - ${email}`;
});
