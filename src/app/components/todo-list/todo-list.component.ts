import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../../models/todo.model';
import { validFilters } from '../filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[]  = [];
  public filterSelected: validFilters;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.subscribe( ({ todos, filter }) => {
      this.todos = todos;
      this.filterSelected = filter;
    });
  }

}
