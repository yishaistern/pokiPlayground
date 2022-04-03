import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonfavoritesComponent } from './components/pokemon-favorites/pokemon-favorites.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { StoreModule } from '@ngrx/store';
import { _pokemonsReducer } from './ngrx/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PokemonEffects } from './ngrx/effect';
import { PokemonImageComponent } from './components/pokemon-image/pokemon-image.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { LocationComponent } from './components/location/location.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    PokemonCardComponent,
    PokemonListComponent,
    PokemonfavoritesComponent,
    PokemonImageComponent,
    LocationComponent,
    EvaluationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ app: _pokemonsReducer}),
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([PokemonEffects]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
