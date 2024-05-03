import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';

interface type_todoitem {
	description: string;
}
interface type_todolist {
	name: string;
	list: type_todoitem[];
}

@Component({
	selector: 'app-todo-editor',
	templateUrl: './todo-editor.component.html',
	styleUrls: ['./todo-editor.component.css']
})


export class TodoEditorComponent {
    constructor(private apiService: ApiService) {};
    
	message: any;

	ownerName = new FormControl
	newtask = new FormControl('', Validators.required)
	temp_todolist: type_todolist = { // initiate ya nga wala anay unod
		name: "",
		list: []
	}

    ngOnInit() { 
        this.apiService.getMessage().subscribe((data) => { 
            this.message = data;
        }); 
    }

	istempListEmpty = () => { // ga retun true kung wala unod and list para ma disable ang save button
		return this.temp_todolist.list.length === 0
	}

	onadd = () => {
		this.temp_todolist.name = this.ownerName.value?.toString() || "no name"
		this.temp_todolist.list.push({ description: this.newtask.value?.toString() || " " })
		console.log(this.temp_todolist)
		this.newtask.reset()
	}
	onsave = () => {
		console.log(`saving... ${JSON.stringify(this.temp_todolist.list, null , 4)}`)
		// const data: any = {
		// 	description: this.temp_todolist
		// }
		// this.apiService.postMessage(data).subscribe(() => {
		// 	this.message.push({ description: data.description })
		// 	this.task.reset()
		// })
	} 

	// task = new FormControl('', Validators.required)
	// onSubmit = () => {
	// 	const data: any = {
	// 		description: this.task.value?.toString() || ''
	// 	}
	// 	this.apiService.postMessage(data).subscribe(() => {
	// 		this.message.push({ description: data.description })
	// 		this.task.reset()
	// 	})
	// }
}
