import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { ToggleAllTodoAction } from '../../store/actions/todo.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public complete = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  public toggleAll(): void {
    this.complete = !this.complete;

    const action = new ToggleAllTodoAction(this.complete);

    this.store.dispatch(action);
  }

}
