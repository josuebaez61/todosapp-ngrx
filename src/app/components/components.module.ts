import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    FilterPipe
  ],
  exports: [
    ReactiveFormsModule,
    TodoAddComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
