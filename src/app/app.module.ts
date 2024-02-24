import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
