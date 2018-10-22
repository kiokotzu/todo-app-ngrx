import { Component, OnInit } from '@angular/core';

import * as fromFilter from '../../../store/actions/filter.action';
import { AppState } from '../../../store/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../../../store/todo.model';
import { ClearCompleteTodoAction } from '../../../store/actions/todo.action';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public validFiltes: fromFilter.validFilter[] = ['all', 'complete', 'pending'];
  public activeFilter: fromFilter.validFilter;

  constructor(private store: Store<AppState>) {
    this.store
      .subscribe(data => {
        this.activeFilter = data.filter;
      });
  }

  ngOnInit() {
  }

  get hasItems$(): Observable<boolean> {
    return this.store.select('todos')
      .pipe(
        map( data => data.length > 0 )
      );
  }

  get pendingItems$(): Observable<number> {
    return this.store.select('todos')
      .pipe(
        map((data: Todo[]) => {
          return data.filter((item: Todo) => !item.complete).length;
        })
      );
  }

  public applyFilter(nameFilter: fromFilter.validFilter): void {
    const action = new fromFilter.SetfilterAction(nameFilter);
    this.store.dispatch(action);
  }

  public selectFilter(nameFilter: fromFilter.validFilter): boolean {
    return this.activeFilter === nameFilter;
  }

  public deleteComplete(): void {
    this.store.dispatch(new ClearCompleteTodoAction());
  }

}
