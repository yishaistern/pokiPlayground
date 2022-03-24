import { createAction, props } from '@ngrx/store';
import { favoritesPokimon, Pokimon } from '../models/polkimon';

export const getfavorites = createAction(
  '[favorites] get favorites'
);

export const getfavoritesSuccess = createAction(
    '[favorites] get favorites success',
    props<{list: favoritesPokimon[]}>(),
  );

  export const getPokimonList = createAction(
    '[pokimon] get list'
  );

  export const getPokimonListSuccess = createAction(
    '[pokimon] get list Success',
    props<{list: Pokimon[]}>(),
  );
