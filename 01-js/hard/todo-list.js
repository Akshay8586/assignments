/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indx){
    if(indx>=0 && indx<this.todos.length){
      this.todos.splice(indx,1);
    }
  }

  update(indx, updated){
    if(indx>=0 && indx<this.todos.length){
      this.todos[indx] = updated;
    }
  }

  getAll(){
    return this.todos;
  }

  get(indx) {
    if(indx>=0 && indx<this.todos.length){
      return this.todos[indx];
    }
    return null;
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
