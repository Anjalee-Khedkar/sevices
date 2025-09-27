import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../models/todos.interface';
import { TodoService } from '../../services/todos.services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


todosArr : Array<Itodos>=[]
  constructor(
    private _todoService :TodoService ) { }

  ngOnInit(): void {
     this.todosArr=this._todoService.fetchAllTodos()
     

  }

}
