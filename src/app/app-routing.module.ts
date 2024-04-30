import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoEditorComponent } from './todo-editor/todo-editor.component';


const routes: Routes = [
  {
    path: "todo-editor",
    component: TodoEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
