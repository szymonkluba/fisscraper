import { createFeatureSelector } from "@ngrx/store";

export const selectSpinnerState = createFeatureSelector<boolean>("spinner")
