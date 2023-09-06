const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});


function addTask(taskText) {
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;
  
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    editTask(taskItem);
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });
  
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
}

function editTask(taskItem) {
  const currentText = taskItem.textContent;
  const editText = prompt('Edit task:', currentText);
  if (editText !== null) {
    taskItem.textContent = editText;

    // Restore the edit and delete buttons
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      editTask(taskItem);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
    });

    // Remove existing buttons and add new ones
    taskItem.innerHTML = ''; // Clear taskItem's content
    taskItem.appendChild(document.createTextNode(editText)); // Set new task text
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
  }
}
