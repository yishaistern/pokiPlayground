import { createAction, props } from '@ngrx/store';
import { favoritesPokemon, Pokemon } from '../models/polkimon';

export const getfavorites = createAction(
  '[favorites] get favorites'
);

export const getfavoritesSuccess = createAction(
    '[favorites] get favorites success',
    props<{list: favoritesPokemon[]}>(),
  );

  export const getPokemonList = createAction(
    '[pokemon] get list'
  );

  export const getPokemonListSuccess = createAction(
    '[pokemon] get list Success',
    props<{list: Pokemon[]}>(),
  );

  export const openCard = createAction(
    '[pokemon] open Card',
    props<{pokemon: Pokemon}>()
  );

  export const pokemonInfo = createAction(
    '[pokemon] card info',
    props<{pokemon: any}>()
  );
  export const closeCard = createAction(
    '[pokemon] close Card'
  );
