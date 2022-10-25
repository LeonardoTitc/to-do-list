import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

import { FormsModule } from '@angular/forms';
import { SaveTodosComponent } from './save-todos/save-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    SaveTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
