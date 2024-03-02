import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { PreviousWorksComponent } from './previous-works/previous-works.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [
    {
        path: "todo",
        component: ToDoComponent
    },
    {
        path: "hero",
        component: HeroComponent
    },
    {
        path: "previousWorks",
        component: PreviousWorksComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
