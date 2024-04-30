import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';

interface type_task { /* nag himo ko dw custom nga type */
	taskName: string,
	isDone: boolean,
	isEditing: boolean
}
interface type_task2 { title: string }

@Component({
	selector: 'app-todo-editor',
	templateUrl: './todo-editor.component.html',
	styleUrls: ['./todo-editor.component.css']
})

export class TodoEditorComponent {

	title = 'frontEnd'; 
    message: any; 
    constructor(private apiService: ApiService) { }; 
    ngOnInit() { 
        this.apiService.getMessage().subscribe(data => { 
            this.message = data; 
        }); 
    }

	task = new FormControl('', Validators.required)
	task_list: type_task[] = [
		{taskName: "task1", isDone: false, isEditing: false},
		{taskName: "task2", isDone: false, isEditing: false}
	]

	onSubmit = () => {
		let newTask: type_task = {
			taskName: this.task.value?.toString() || '', /* convert toString para inde mag null or mag error */
			isDone: false,
			isEditing: false
		}

		this.task_list = [...this.task_list, newTask];
		this.task.reset()
	}

	onSubmit2 = () => {
		const data: any = {
			"title": this.task.value?.toString() || ''
		}
		console.log(data)
		this.apiService.postMessage(data).subscribe((result) => {
			console.warn(result)
		})
		window.location.reload()
	}

	/* pabalo sng status kng valid or invalid */
	// validation = "invalid!"
	// ngOnInit(): void {
	// 	this.task.statusChanges.subscribe((status) => {
	// 		this.validation = status === "VALID" ? "ok" : "invalid!"
	// 	})
	// }

	/* ----- CRUD function ----- */
	crossOut = (index: number) => {
		this.task_list[index].isDone = !this.task_list[index].isDone /* gamit "!" para suliun ang boolean value sa isDone */
	}
	deleteTask = (index: number) => {
		this.task_list.splice(index, 1)
	}
	editTask(index: number) {
		this.task_list[index].isEditing = true;
	}
	saveTask(index: number) {
		this.task_list[index].isEditing = false;
	}
}

