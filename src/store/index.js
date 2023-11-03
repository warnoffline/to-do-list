import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem('todos') || '[]'),
  },
  getters: {
    allTodos(state){
      return state.todos
    }
  },
  mutations: {
    addTodo(state, newTodo){
      state.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    clearList(state){
      state.todos = state.todos.filter(todo => !todo.isComplete);
      localStorage.setItem('todos', JSON.stringify(state.todos));  
    },
    toggleTodoStatus(state, todoId) {
      const todo = state.allTodos.find(item => item.id === todoId);
      if (todo) {
        todo.isComplete = !todo.isComplete;
        localStorage.setItem('todos', JSON.stringify(state.allTodos));
      }
    }
  },
})
