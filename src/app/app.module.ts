import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { HeroComponent } from './hero/hero.component';
import { PreviousWorksComponent } from './previous-works/previous-works.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroComponent,
    PreviousWorksComponent,
    SkillsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
