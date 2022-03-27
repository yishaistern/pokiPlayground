import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPokemonList } from 'src/app/ngrx/actions';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getPokemonList());
  }

}
