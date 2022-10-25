import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-save-todos',
  templateUrl: './save-todos.component.html',
  styleUrls: ['./save-todos.component.css']
})
export class SaveTodosComponent implements OnInit {

  constructor() { }

  todos!: Todo[];

  ngOnInit(): void {
  }


  saveTodo() {
    let data = this.todos;

    localStorage.setItem('TODO', JSON.stringify(data));
  }

}
