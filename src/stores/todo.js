// stores/todo.js
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: [],
    filter: 'all',
  }),
  actions: {
    addTask(newTaskText) {
      if (newTaskText.trim() !== '') {
        this.tasks.push({
          id: Date.now(),
          text: newTaskText,
          completed: false,
          showDropdown: false,
        });
      }
    },
    toggleTask(task) {
      task.completed = !task.completed;
      task.showDropdown = false; 
    },
    deleteTask(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
      task.showDropdown = false; 
    },
    toggleDropdown(task) {
      task.showDropdown = !task.showDropdown;
    },
  },
  persist: true, 
});
