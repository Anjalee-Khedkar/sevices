import { Injectable } from "@angular/core";
import { Itodos } from "../models/todos.interface";


 @Injectable({
    providedIn:'root'
 })
 export class TodoService{
  todosArr  :Array<Itodos>=[
   


    {
 todoItem:'sass',
 todoId:'124'
  },
  


  { todoItem: 'html', todoId: '125' },
  { todoItem: 'css', todoId: '126' },
  { todoItem: 'javascript', todoId: '127' },
 

]

  fetchAllTodos(){
     return this.todosArr;
  }
// ?

   createNewTodos(todo: Itodos) {
  this.todosArr.push(todo);
}


 }

