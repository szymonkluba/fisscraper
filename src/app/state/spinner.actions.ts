import { createAction } from "@ngrx/store";

export const enableSpinner = createAction(
  '[Spinner] enable spinner'
)

export const disableSpinner = createAction(
  '[Spinner] disable spinner'
)
