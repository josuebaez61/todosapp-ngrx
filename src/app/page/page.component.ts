import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as actions from '../components/todo.actions';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public allcompleted: boolean = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.select('todos').subscribe( todos => {

      /** NOTE ===============================||
       * Si todos los TODOS son true...
       */// ==================================||

      if( todos.every( todo => todo.completed === true ) ) {
        this.allcompleted = true;
      } else {
        this.allcompleted = false;
      }
      
    });
  } 

  toggleAll(event: boolean) {
    this.store.dispatch( actions.toggleAll( { allcompleted: event } ) );
  }
}
