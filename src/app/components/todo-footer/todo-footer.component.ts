import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { validFilters, setFilter } from '../filter.actions';
import { clean } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public filters        : validFilters[] = ['all', 'allCompleted', 'allActive'];
  public filterSelected : validFilters   = 'all';
  public pending        : number         = 0;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.filterSelected = state.filter;
      this.pending        = state.todos.filter( todo => !todo.completed ).length;
    });
  }
  
  onChangeFilter( filter: validFilters) {
    this.store.dispatch( setFilter({ filter: filter }) );
  }

  clean() {
    this.store.dispatch( clean() );
  }
}
