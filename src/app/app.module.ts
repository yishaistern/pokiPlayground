import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { PokimonCardComponent } from './components/pokimon-card/pokimon-card.component';
import { PokimonListComponent } from './components/pokimon-list/pokimon-list.component';
import { PokimonCartComponent } from './components/pokimon-cart/pokimon-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    PokimonCardComponent,
    PokimonListComponent,
    PokimonCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
