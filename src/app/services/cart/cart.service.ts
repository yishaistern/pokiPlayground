import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CartPokimon, Pokimon } from 'src/app/models/polkimon';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private key = 'pokiCarts';
  constructor() { }

  /**
   * get from local storage the list that was saved last in the browser
   * @returns the last cart that was saved
   */
  getLastCart():Observable<CartPokimon[]> {
    const lastCart = localStorage.getItem(this.key);
    const parstedCart: CartPokimon[] = (lastCart) ? JSON.parse(lastCart) : [];
    // mocking a DB of user
    return of(parstedCart).pipe(delay(200));
  }

  /**
   * add new pokimon to cart
   */
  AddToCart(cart: CartPokimon[], pokimon: Pokimon): Observable<CartPokimon[]> {
    const newCart: CartPokimon[] = [ {...pokimon, timeStamp: new Date().getTime()}, ...cart];
    localStorage.setItem(this.key, JSON.stringify(newCart));
    return of(newCart).pipe(delay(200));
  }
}
