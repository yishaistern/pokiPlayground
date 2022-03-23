import { createSelector } from "@ngrx/store";
import { State } from "../models/state";

 
export const selectFeature = (state: State) => state;
 
export const selectFeatureCount = createSelector(
  selectFeature,
  (state: State) => state.favorites
);