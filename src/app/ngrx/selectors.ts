import { createSelector } from "@ngrx/store";
import { AppState } from "../models/state";

 
export const selectFeature = (state: any) => state.app;
 
export const selectFavorites = createSelector(
  selectFeature,
  (state: AppState) => state.favorites
);

export const selectFavoritesNames = createSelector(
  selectFeature,
  (state: AppState) => {
    const res: Record<string, boolean> = {};
    state.favorites.forEach((item) => {
      res[item.name] = true;
    });
    return res;
  }
);

export const selectPokemonList = createSelector(
  selectFeature,
  (state: AppState) => state.list.pokemons || []
);

export const openCard = createSelector(
  selectFeature,
  (state: AppState) => state.cardOpen
);

export const pokemonCard = createSelector(
  selectFeature,
  (state: AppState) => state.card
);



