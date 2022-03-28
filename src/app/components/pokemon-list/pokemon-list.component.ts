import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Pokemon } from 'src/app/models/polkimon';
import { getPokemonList } from 'src/app/ngrx/actions';
import { selectPokemonList } from 'src/app/ngrx/selectors';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  list: Observable<any[]> = of([]);
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getPokemonList());
    this.list = this.store.select(selectPokemonList);
  }

  pickFavorit(item: Pokemon) {
    
  }

}