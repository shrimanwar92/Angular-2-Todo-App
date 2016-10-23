import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoService {

	lastId: number = 0;
	todos: Todo[] = [];

  	constructor() { 

  	}

  	add(todo: Todo) {
  		todo.id = this.lastId++;
  		this.todos.push(todo);
  		return this;
  	}

  	delete(id: number) {
  		this.todos = this.todos.filter(todo => todo.id != id);
  		return this;
  	}

  	update(id: number, todo: Object = {}) {
  		let tdToUpdate = this.getTodoById(id);
  		if(!tdToUpdate) {
  			return null;
  		}

  		//Object.assign(tdToUpdate, todo);
  		(<any>Object).assign(tdToUpdate, todo);
  		return tdToUpdate;
  	}

  	getTodoById(id: number) {
  		let todo = this.todos.filter(todo => todo.id == id).pop();
  		return todo;
  	}

  	toggleTodoComplete(todo: Todo){
    	let updatedTodo = this.update(todo.id, {
      		complete: !todo.complete
    	});
    	return updatedTodo;
  	}

  	getAllTodos() {
  		return this.todos;
  	}
}
