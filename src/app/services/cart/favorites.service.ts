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
    
    // mocking a DB of user
    return of(this.getCuurentList()).pipe(delay(200));
  }

  getCuurentList(): favoritesPokemon[] {
    const lastfavorites = localStorage.getItem(this.key);
    const parstedfavorites: favoritesPokemon[] = (lastfavorites) ? JSON.parse(lastfavorites) : [];
    return parstedfavorites;
  }

  /**
   * add new pokemon to favorites
   */
  AddTofavorites( pokemon: Pokemon, index: number): Observable<favoritesPokemon[]> {
    const favorites = this.getCuurentList();
    const newfavorites: favoritesPokemon[] = [ {...pokemon, timeStamp: new Date().getTime(), indexInDataSet: index}, ...favorites];
    localStorage.setItem(this.key, JSON.stringify(newfavorites));
    return of(newfavorites).pipe(delay(200));
  }
}
