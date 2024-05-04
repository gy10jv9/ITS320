import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService_TodoList } from './services/api-todoList.service';
import { ApiService_User } from './services/api-user.service';

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
    constructor(
		private apiService_todoList: ApiService_TodoList,
		private apiService_user: ApiService_User
	) {};
    
	todoList: any

	ownerName = new FormControl
	newtask = new FormControl('', Validators.required)
	temp_todolist: type_todolist = { // initiate ya nga wala anay unod
		name: "",
		list: []
	}

    ngOnInit() { 
        this.apiService_todoList.get_todolist().subscribe((data) => { 
            this.todoList = data;
        }); 
    }

	istempListEmpty = () => { // ga retun true kung wala unod and list para ma disable ang save button
		return this.temp_todolist.list.length === 0
	}

	onadd = () => { // add sa temporary list lang anay
		this.temp_todolist.name = this.ownerName.value?.toString() || "no name"
		this.temp_todolist.list.push({ description: this.newtask.value?.toString() || " " })
		
		console.log(this.temp_todolist)
		this.newtask.reset()
	}

	id_owner: any

	onsave = async () => { // mag save na sa database gd
		let data: any = {
			name: this.temp_todolist.name
		}

		this.apiService_user.post_user(data).subscribe((response: any) => {
			this.id_owner = response.id
			console.log(this.id_owner)
		})

		for(let i of this.temp_todolist.list) {
			var data1: any = {
				description: i.description,
				user: this.temp_todolist.name
			}
			console.log(data1)

			this.apiService_todoList.post_todolist(data1).subscribe(() => {
				this.todoList.push({ 
					description: data1.description,
					user: data1.user
				})
			})
		}

		this.temp_todolist.list = []
		this.ownerName.reset()

		console.log(`Current todoList: ${JSON.stringify(this.todoList, null, 4)}`)
	} 
}
