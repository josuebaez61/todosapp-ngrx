import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  
  public chkCompleted: FormControl;
  public txtInput: FormControl;
  public editing : boolean = false;

  @ViewChild('editInput') editInput : ElementRef;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.chkCompleted = new FormControl( this.todo.completed );
    this.txtInput     = new FormControl( this.todo.text, Validators.required );

    this.chkCompleted.valueChanges.subscribe( valor => {
      console.log(valor)
      this.store.dispatch( actions.toggle( { id: this.todo.id } ) );
    });
  }

  edit() {
    this.editing = true;

    setTimeout(() => {
      this.editInput.nativeElement.select();
    }, 1)
    
  }

  endEditing() {
    this.editing = false;

    if ( this.txtInput.invalid ) { return; }
    if ( this.txtInput.value === this.todo.text ) { return; }

    this.store.dispatch( actions.editing( { id: this.todo.id, text: this.txtInput.value } ) )
  }

  destroy() {
    this.store.dispatch( actions._delete( { id: this.todo.id } ))
  }
}
