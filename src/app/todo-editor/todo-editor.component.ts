import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-todo-editor',
	templateUrl: './todo-editor.component.html',
	styleUrls: ['./todo-editor.component.css']
})

export class TodoEditorComponent {
	task = new FormControl('', Validators.required)
	task_list: string[] = []

	onSubmit = () => {
		console.log("submit button is working")

		this.task_list = [...this.task_list, this.task.value!]
		this.task.reset()
	}


	/* pabalo sng status kng valid or invalid */
	validation = "invalid!"
	ngOnInit(): void {
		this.task.statusChanges.subscribe((status) => {
			this.validation = status === "VALID" ? "ok" : "invalid!"
		})
	}
}

