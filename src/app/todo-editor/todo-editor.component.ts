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

	onsave = () => {
		this.temp_todolist.name = this.ownerName.value?.toString() || "no name"
		this.temp_todolist.list.push({ description: this.newtask.value?.toString() || " " })
		console.log(this.temp_todolist)
		this.newtask.reset()
	}

	task = new FormControl('', Validators.required)
	onSubmit = () => {
		const data: any = {
			description: this.task.value?.toString() || ''
		}
		this.apiService.postMessage(data).subscribe(() => {
			this.message.push({ description: data.description })
			this.task.reset()
		})
	}
}
