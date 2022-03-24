import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { favoritesService } from '../services/cart/favorites.service';
import { ListService } from '../services/list/list.service';

@Injectable()
export class PokimonEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[favorites] get favorites'),
    mergeMap(() => this.favoritesService.getLastfavorites()
      .pipe(
        map(favorites => ({ type: '[favorites] get favorites success', payload: { list: favorites} })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadPokimons$ = createEffect(() => this.actions$.pipe(
    ofType( '[pokimon] get list'),
    mergeMap(() => this.list.getList()
      .pipe(
        map(list => ({ type:  '[pokimon] get list success', payload: { list: list} })),
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