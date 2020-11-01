import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import { validFilters } from '../components/filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {


    switch (filter) {

      case 'allCompleted':
        return todos.filter( todo => todo.completed);

      case 'allActive':
        return todos.filter( todo => !todo.completed);
    
      default:
        return todos.filter( todo => todo);
    }

  }

}
