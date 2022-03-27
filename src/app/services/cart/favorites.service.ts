import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { favoritesPokemon, Pokemon } from 'src/app/models/polkimon';

@Injectable({
  providedIn: 'root'
})
export class favoritesService {
  private key = 'pokifavoritess';
  constructor() { }

  /**
   * get from local storage the list that was saved last in the browser
   * @returns the last favorites that was saved
   */
  getLastfavorites():Observable<favoritesPokemon[]> {
    const lastfavorites = localStorage.getItem(this.key);
    const parstedfavorites: favoritesPokemon[] = (lastfavorites) ? JSON.parse(lastfavorites) : [];
    // mocking a DB of user
    return of(parstedfavorites).pipe(delay(200));
  }

  /**
   * add new pokemon to favorites
   */
  AddTofavorites(favorites: favoritesPokemon[], pokemon: Pokemon, index: number): Observable<favoritesPokemon[]> {
    const newfavorites: favoritesPokemon[] = [ {...pokemon, timeStamp: new Date().getTime(), indexInDataSet: index}, ...favorites];
    localStorage.setItem(this.key, JSON.stringify(newfavorites));
    return of(newfavorites).pipe(delay(200));
  }
}
