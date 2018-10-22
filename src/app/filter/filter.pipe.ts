import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../store/todo.model';

import * as fromFilter from '../../store/actions/filter.action';

@Pipe({
  name: 'filterTodo'
})

export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filterType?: fromFilter.validFilter): Todo[] {

    switch (filterType) {
      case 'complete':
        return todos.filter(data => data.complete);
      case 'pending':
        return todos.filter(data => !data.complete);
      default:
        return todos;
    }

  }
}
