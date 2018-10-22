import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AppState } from '../../../store/app.reducers';
import * as fromTodo from '../../../store/actions/todo.action';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  public textInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.textInput = new FormControl('', Validators.required);
  }

  public addTodo(): void {
    if (this.textInput.valid) {
      const action = new fromTodo.AddTodoAction( this.textInput.value );
      this.store.dispatch(action);
      this.textInput.setValue('');
    }
  }

}
