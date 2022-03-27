import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonfavoritesComponent } from './components/pokemon-favorites/pokemon-favorites.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
 {
   path: '',
   children: [
     {
       path: '',
       component: PokemonListComponent,
     },
     {
      path: 'favorites',
      component: PokemonfavoritesComponent,
    }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
