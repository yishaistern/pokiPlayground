import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { favoritesPokimon, Pokimon } from 'src/app/models/polkimon';

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
  getLastfavorites():Observable<favoritesPokimon[]> {
    const lastfavorites = localStorage.getItem(this.key);
    const parstedfavorites: favoritesPokimon[] = (lastfavorites) ? JSON.parse(lastfavorites) : [];
    // mocking a DB of user
    return of(parstedfavorites).pipe(delay(200));
  }

  /**
   * add new pokimon to favorites
   */
  AddTofavorites(favorites: favoritesPokimon[], pokimon: Pokimon, index: number): Observable<favoritesPokimon[]> {
    const newfavorites: favoritesPokimon[] = [ {...pokimon, timeStamp: new Date().getTime(), indexInDataSet: index}, ...favorites];
    localStorage.setItem(this.key, JSON.stringify(newfavorites));
    return of(newfavorites).pipe(delay(200));
  }
}
