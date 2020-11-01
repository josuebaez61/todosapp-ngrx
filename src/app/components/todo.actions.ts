import { createAction, props } from '@ngrx/store'; 
import { validFilters } from './filter.actions';

export const create = createAction(
    '[TODO] Create Todo',
    props<{ text: string }>()
)

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()
);

export const editing = createAction(
    '[TODO] Editing Todo',
    props<{ id: number, text: string }>()
);

export const _delete = createAction(
    '[TODO] Delete Todo',
    props<{ id: number }>()
)

export const toggleAll = createAction(
    '[TODO] ToogleAll',
    props<{ allcompleted: boolean }>()
)

export const clean = createAction(
    '[TODO] Clean'
)