import { createAction, props } from '@ngrx/store';

export type validFilters = 'allCompleted' | 'all' | 'allActive';

export const setFilter = createAction(
    '[FILTER] Set Filter',
    props<{ filter: validFilters }>()
)