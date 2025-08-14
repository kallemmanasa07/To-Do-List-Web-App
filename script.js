// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create li element
    const li = document.createElement("li");

    // Task text span
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    // Append to li
    li.appendChild(taskSpan);
    li.appendChild(removeBtn);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Event listeners
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
