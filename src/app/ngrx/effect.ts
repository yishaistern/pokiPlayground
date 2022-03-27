import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { favoritesService } from '../services/cart/favorites.service';
import { ListService } from '../services/list/list.service';
import { getfavoritesSuccess, getPokemonListSuccess } from './actions';

@Injectable()
export class PokemonEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[favorites] get favorites'),
    mergeMap(() => this.favoritesService.getLastfavorites()
      .pipe(
        map(favorites => getfavoritesSuccess({list : favorites})),
        
        catchError(() => EMPTY)
      ))
    )
  );

  loadPokemons$ = createEffect(() => this.actions$.pipe(
    ofType( '[pokemon] get list'),
    mergeMap(() => this.list.getList()
      .pipe(
        map(list => getPokemonListSuccess({list})),
        // map(list => ({ type:  '[pokemon] get list success', payload: { list: list} })),
        catchError(() => EMPTY)
      ))
    )
  );


  constructor(
    private actions$: Actions,
    private favoritesService: favoritesService,
    private list: ListService,
  ) {}
}