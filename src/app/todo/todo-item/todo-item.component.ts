import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { DeleteTodoAction, EditTodoAction, ToggleTodoAction } from '../../../store/actions/todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item;
  @ViewChild('textInput') textInput: ElementRef;

  public checkField: FormControl;
  public txtInput: FormControl;
  public edit: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.item.complete);
    this.txtInput = new FormControl(this.item.text, Validators.required);

    this.checkField.valueChanges.subscribe(
      () => {
        const action = new ToggleTodoAction(this.item.id);
        this.store.dispatch(action);
      }
    );
  }

  public editText(): void {
    this.edit = true;

    setTimeout(() => {
      this.textInput.nativeElement.focus();
    }, 1);
  }

  public editFinish(): void {
    this.edit = false;

    if (this.txtInput.valid && this.txtInput.value !== this.item.text){
      const action = new EditTodoAction(this.item.id, this.txtInput.value);
      this.store.dispatch(action);
    }
  }

  public deleteItem(): void {
    const action = new DeleteTodoAction(this.item.id);
    this.store.dispatch(action);
  }

}
