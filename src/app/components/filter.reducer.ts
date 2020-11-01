import { createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';

export const initialState: validFilters = 'all';

export const _filterReducer = createReducer(
    initialState,
    on(
        setFilter,
        (state, { filter }) => filter,
    ),
);

export function filterReducer( state, actions ) {
    return _filterReducer( state, actions )
}