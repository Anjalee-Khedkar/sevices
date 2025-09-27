import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodos } from '../../models/todos.interface';
import { TodoService } from '../../services/todos.services';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm !:NgForm

  constructor( private _uuidService:UuidService,
    private _todoService:TodoService
  ) { }

  ngOnInit(): void {
  }

ontodoAdd(form: any ){
   if (this.todoForm.valid){
     let  todoObj :Itodos = this.todoForm.value;
       todoObj.todoId = this._uuidService.uuid()
     console.log(todoObj);
      this.todoForm.reset()

       this._todoService.createNewTodos(todoObj)
   }
}
   
   

}
