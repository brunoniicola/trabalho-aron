function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Digite uma tarefa.');
      return;
    }
  
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="toggleTaskCompletion(this)">Concluir</button>
    `;
    taskList.appendChild(li);
  
    taskInput.value = '';
  }
  
  function toggleTaskCompletion(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
  }
  
  function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => task.remove());
  }
  