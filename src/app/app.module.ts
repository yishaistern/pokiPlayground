import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { PokimonCardComponent } from './components/pokimon-card/pokimon-card.component';
import { PokimonListComponent } from './components/pokimon-list/pokimon-list.component';
import { PokimonfavoritesComponent } from './components/pokimon-favorites/pokimon-favorites.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { StoreModule } from '@ngrx/store';
import { pokimonsReducer, _pokimonsReducer } from './ngrx/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PokimonEffects } from './ngrx/effect';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    PokimonCardComponent,
    PokimonListComponent,
    PokimonfavoritesComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ app: _pokimonsReducer}),

    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([PokimonEffects]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
