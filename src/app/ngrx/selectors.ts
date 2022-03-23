import { createSelector } from "@ngrx/store";
import { AppState } from "../models/state";

 
export const selectFeature = (state: any) => state.app;
 
export const selectFavorites = createSelector(
  selectFeature,
  (state: AppState) => state.favorites
);