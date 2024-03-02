import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css']
})
export class TodoEditorComponent {
  todo_form = new FormGroup({
    task: new FormControl(''),
    status: new FormControl('pending')
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.todo_form.value);
  }
}

