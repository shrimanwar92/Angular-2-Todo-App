export class Todo {
	id: number;
	title: string;
	complete: boolean = false;

	constructor(todo: Object = {}) {
		(<any>Object).assign(this, todo);
	}
}
