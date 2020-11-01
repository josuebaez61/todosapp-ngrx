import { createReducer, on } from '@ngrx/store';
import { create, toggle, editing, _delete, toggleAll, clean } from './todo.actions';
import { Todo } from '../models/todo.model';

export const initialState : Todo[] = JSON.parse(localStorage.getItem('todos')) || [];
const storageArray        : Todo[] = JSON.parse(localStorage.getItem('todos')) || [];

const _todoReducer = createReducer(
  initialState,


  /** NOTE =============================================================||
   * Create
   */// ================================================================||

  on(create, (state, { text }) => {
    const newTodo = new Todo( text );
    storageArray.push(newTodo);
    localStorage.setItem(`todos`, JSON.stringify(storageArray))
    return [...state, newTodo]
  }),

  /** NOTE =============================================================||
   * Toggle
   */// ================================================================||

  on(toggle, (state, { id }) => {
    return state.map( todo => { 
      if ( todo.id === id ) {

        const todosLs = JSON.parse(localStorage.getItem('todos')) || [];
        const index   = todosLs.findIndex( todo => todo.id === id );
        todosLs.splice(index, 1, { ...todo, completed: !todo.completed })
        localStorage.setItem('todos', JSON.stringify(todosLs));

        return { ...todo, completed: !todo.completed }
      } else{
        return todo;
      }
    })
  }),

  /** NOTE =============================================================||
   * Toggle All
   */// ================================================================||
  
  on(toggleAll, (state, { allcompleted }) => {
    return state.map( todo => {

      const todosLs = JSON.parse(localStorage.getItem('todos')) || [];
      todosLs.forEach( todo => {
        todo.completed = allcompleted;
      });

      localStorage.setItem('todos', JSON.stringify(todosLs))

      return {
        ...todo, completed : allcompleted
      }
    });
  }),
  
  /** NOTE =============================================================||
   * Editing
   */// ================================================================||

  on(editing, (state, { id, text }) => {
    return state.map( todo => { 
      if ( todo. id === id ) {
        return { ...todo, text: text }
      } else{
        return todo;
      }
    })
  }),

   /** NOTE =============================================================||
   * Delete
   */// ================================================================||

  on(_delete, (state, { id }) => {
    const newState = state.filter( todo => todo.id !== id );
    localStorage.setItem('todos', JSON.stringify(newState));
    return newState;
  }),

   /** NOTE =============================================================||
   * Clean all (completed)
   */// ================================================================||

  on(clean, (state) => {
    const newState = state.filter(todo => !todo.completed)
    localStorage.setItem('todos', JSON.stringify(newState));
    return newState;
  })
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}