import { createAction, props } from '@ngrx/store';
import { favoritesPokimon } from '../models/polkimon';

export const getfavorites = createAction(
  '[favorites] get favorites'
);

export const getfavoritesSuccess = createAction(
    '[favorites] get favorites success',
    props<{list: favoritesPokimon[]}>(),
  );