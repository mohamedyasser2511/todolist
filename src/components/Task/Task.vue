<template>
  <h1 style="text-align: center;">Welcome to my Todolist</h1>
  <div class="todo-app">
    <h2>To-Do List</h2>
    <div class="input-group">
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task..." />
      <button class="add-btn" @click="addTask">Add</button>
    </div>
    
    <div class="filters">
      <button :class="{ active: filter === 'all' }" @click="setFilter('all')">Show All</button>
      <button :class="{ active: filter === 'completed' }" @click="setFilter('completed')">Completed</button>
      <button :class="{ active: filter === 'notCompleted' }" @click="setFilter('notCompleted')">Not Completed</button>
    </div>
    
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in filteredTasks" :key="task.id">
          <td >
            <span style="cursor: pointer;" :class="{ completed: task.completed } " @click="toggleTask(task)">{{ task.text }}</span>
          </td>
          <td>{{ task.completed ? '✅ Completed' : '❌ Not Completed' }}</td>
          <td>
            <div class="dropdown">
              <button class="toggle-btn" @click="toggleDropdown(task)">Actions</button>
              <div v-if="task.showDropdown" class="dropdown-menu">
                <button class="dropdown-item" @click="toggleTask(task)">Toggle Status     
                  <i class="fas fa-check-circle toggle-icon" v-if="!task.completed"></i>
                  <i class="fas fa-times-circle toggle-icon" v-if="task.completed"></i>
                </button>
                <button class="dropdown-item" @click="deleteTask(task)">Delete   
                  <i class="fas fa-trash-alt delete-icon"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

  <script setup>
  import { ref, computed } from 'vue';
  import { useTodoStore } from '../../stores/todo';
  import'./style.css'
  const newTask = ref('');
  const todoStore = useTodoStore();
  
  const addTask = () => {
    todoStore.addTask(newTask.value);
    newTask.value = ''; 
  };
  
  const toggleTask = (task) => {
    todoStore.toggleTask(task);
  };
  
  const deleteTask = (task) => {
    todoStore.deleteTask(task);
  };
  
  const toggleDropdown = (task) => {
    todoStore.tasks.forEach(t => {
      if (t.id !== task.id) {
        t.showDropdown = false;
      }
    });
    task.showDropdown = !task.showDropdown;
  };
  
  const setFilter = (filterValue) => {
    todoStore.filter = filterValue;
  };
  
  const filteredTasks = computed(() => {
    if (todoStore.filter === 'completed') return todoStore.tasks.filter(task => task.completed);
    if (todoStore.filter === 'notCompleted') return todoStore.tasks.filter(task => !task.completed);
    return todoStore.tasks;
  });
  
  const filter = computed(() => todoStore.filter);
</script>
