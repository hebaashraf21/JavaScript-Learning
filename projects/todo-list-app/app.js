// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterOptions = document.getElementById("filterTasks");
const searchInput = document.getElementById("searchInput");

// Load tasks from LocalStorage on page load
document.addEventListener("DOMContentLoaded", loadTasks);

// Function to load tasks from LocalStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.innerHTML = "";
    tasks.forEach(task => createTaskElement(task.text, task.completed));
}

// Function to create a task element
function createTaskElement(text, completed = false) {
    const li = document.createElement("li");
    li.classList.add("task");
    if (completed) li.classList.add("completed"); // Add completed class if task is done

    li.innerHTML = `
        <span class="task-text">${text}</span>
        <div>
            <button class="complete-btn">✅</button>
            <button class="edit-btn">✏️</button>
            <button class="delete-btn">❌</button>
        </div>
    `;

    // Event listener for marking task as completed
    li.querySelector(".complete-btn").addEventListener("click", function () {
        li.classList.toggle("completed");
        updateLocalStorage();
    });

    // Event listener for editing task
    li.querySelector(".edit-btn").addEventListener("click", function () {
        editTask(li);
    });

    // Event listener for deleting task
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
        updateLocalStorage();
    });

    taskList.appendChild(li);
    updateLocalStorage();
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    createTaskElement(taskText);
    taskInput.value = "";
}

// Function to edit a task
function editTask(li) {
    const taskTextElement = li.querySelector(".task-text");
    const newText = prompt("Edit task:", taskTextElement.innerText);
    if (newText !== null) {
        taskTextElement.innerText = newText.trim();
        updateLocalStorage();
    }
}

// Function to update LocalStorage
function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll(".task").forEach(li => {
        tasks.push({
            text: li.querySelector(".task-text").innerText,
            completed: li.classList.contains("completed"),
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to filter tasks based on completion status
filterOptions.addEventListener("change", function () {
    const filter = filterOptions.value;
    document.querySelectorAll(".task").forEach(li => {
        switch (filter) {
            case "all":
                li.style.display = "flex";
                break;
            case "completed":
                li.style.display = li.classList.contains("completed") ? "flex" : "none";
                break;
            case "pending":
                li.style.display = !li.classList.contains("completed") ? "flex" : "none";
                break;
        }
    });
});

// Add event listeners
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") addTask();
});




// Function to filter tasks based on search query
searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".task").forEach(li => {
        const taskText = li.querySelector(".task-text").innerText.toLowerCase();
        li.style.display = taskText.includes(query) ? "flex" : "none";
    });
});
