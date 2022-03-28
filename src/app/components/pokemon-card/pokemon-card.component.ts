import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { pokemonCard } from 'src/app/ngrx/selectors';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  card: Subscription | undefined;
  moevs: any[] = [];
  games: any[] = [];
  type: string = '';
  encounter: string = '';
  spices: { name: string, url: string} | undefined;
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.card = this.store.select(pokemonCard).subscribe(data => {
      this.type = data.pokemon?.types[0]?.type?.name;
      this.moevs = data.pokemon?.moves;
      this.games = data.pokemon?.game_indices;
      this.encounter = data.pokemon?.location_area_encounters;
      this.spices = data.pokemon?.species;

    });
  }

}
