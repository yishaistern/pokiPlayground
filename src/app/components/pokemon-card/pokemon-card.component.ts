import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, Observable, of, Subscription } from 'rxjs';
import { pokemonCard, selectFavoritesNames } from 'src/app/ngrx/selectors';
import { PokemonInfoService } from '../../services/pokemonInfo/pokemon-info.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  panelOpenState = false;
  card: Subscription | undefined;
  moevs: any[] = [];
  games: any[] = [];
  id: number = -1;
  name: string = '';
  type: string = '';
  encounter: string = '';
  spices: { name: string, url: string} = { name: '', url: ''};
  showInfoArea: boolean =  false;
  details: any = {};
  isOnFavoritList: Observable<boolean> = of(false);
  constructor(
    private store: Store,
    private pokemonInfo: PokemonInfoService
  ) { }

  ngOnInit(): void {
    this.isOnFavoritList = this.store.select(selectFavoritesNames).pipe(
      map((payload) => (payload[this.id]) ? true : false)
    );
    this.card = this.store.select(pokemonCard).pipe(
      filter(payload => payload !== null)
    ).
    subscribe(data => {
      this.type = data.pokemon?.types[0]?.type?.name;
      this.moevs = data.pokemon?.moves;
      this.games = data.pokemon?.game_indices;
      this.encounter = data.pokemon?.location_area_encounters;
      this.spices = data.pokemon?.species;
      this.name = data.pokemon?.name;
      this.id = data.pokemon?.id;
      this.getInfo(this.encounter, this.spices?.url, this.name, this.id)
    });
  }

  getInfo(encounter: string, spices: string, name: string, id: number) {
    if (!encounter || !spices) {
      return;
    }
    this.pokemonInfo.getDetails(encounter, spices, name, id).subscribe((payload) => {
      this.details = { chain: payload[0], location: payload[1] };
      console.log(this.details);
    });
  }

}
