import { createReducer, on } from '@ngrx/store';
import { disableSpinner, enableSpinner } from './spinner.actions';

export const initialState: boolean = false;

export const spinnerReducer = createReducer(
  initialState,
  on(enableSpinner, () => true),
  on(disableSpinner, () => false)
);
