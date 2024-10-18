// Get references to the input field and the container
const addTaskBtn = document.getElementById('addTaskBtn');
const newTaskInput = document.getElementById('newTask');
const todoItemsContainer = document.getElementById('todoItemsContainer');

// Add event listener to the "Add" button
addTaskBtn.addEventListener('click', function() {
    // Get the task text from the input field
    const taskText = newTaskInput.value;

    // Check if the input is not empty
    if (taskText.trim() !== '') {
        // Create a new todo item element
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        // Add the checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Add the task label
        const label = document.createElement('label');
        label.textContent = taskText;

        // Add the delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            todoItem.remove();
        };

        // Append checkbox, label, and delete button to the todo item
        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);
        todoItem.appendChild(deleteBtn);

        // Add the new todo item to the container
        todoItemsContainer.appendChild(todoItem);

        // Clear the input field after adding
        newTaskInput.value = '';
    }
});