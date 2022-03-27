import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    PokemonCardComponent,
    PokemonListComponent,
    PokemonfavoritesComponent,
    PokemonImageComponent
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
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
