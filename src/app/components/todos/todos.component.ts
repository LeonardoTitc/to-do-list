import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];

  inputTodo: string = "";

  TODO: any;

  constructor() { }

  ngOnInit(): void {
    this.todos = []
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i != id);
  }

  addTodo() {
    if (this.inputTodo.length == 0) {
      alert('Type in your Todo')
    }
    else {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = '';
    }

  }



  // loadTodo() {
  //   let data: any = localStorage.getItem('TODO');
  //   // alert(data)
  //   this.TODO = JSON.parse(data)
  // }
}
