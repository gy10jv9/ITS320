import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-todo-editor',
	templateUrl: './todo-editor.component.html',
	styleUrls: ['./todo-editor.component.css']
})
export class TodoEditorComponent {
	task = new FormControl('')
	task_list: string[] = ["test 1", "test 2", "test 3"]

	onSubmit = () => {
		this.task_list = [...this.task_list, this.task.value!];
	}
}

