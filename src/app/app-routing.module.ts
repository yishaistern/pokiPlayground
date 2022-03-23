import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokimonfavoritesComponent } from './components/pokimon-favorites/pokimon-favorites.component';
import { PokimonListComponent } from './components/pokimon-list/pokimon-list.component';

const routes: Routes = [
 {
   path: '',
   children: [
     {
       path: '',
       component: PokimonListComponent,
     },
     {
      path: 'favorites',
      component: PokimonfavoritesComponent,
    }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
