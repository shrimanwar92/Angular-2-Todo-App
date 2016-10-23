import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
  providers: [TodoService]
})
export class TodoAppComponent implements OnInit {

	newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  toggleTodoComplete(todo) {
  	this.todoService.toggleTodoComplete(todo);
  }

  addTodo() {
    this.todoService.add(this.newTodo);
    this.newTodo = new Todo();
  }


  removeTodo(todo) {
    this.todoService.delete(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

}
