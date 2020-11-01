import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { todoReducer } from './components/todo.reducer';
import { validFilters } from './components/filter.actions';
import { filterReducer } from './components/filter.reducer';

export interface AppState {
    todos: Todo[],
    filter: validFilters
}

export const appReducer: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}