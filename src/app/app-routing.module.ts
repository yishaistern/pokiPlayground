import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokimonCartComponent } from './components/pokimon-cart/pokimon-cart.component';
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
      path: 'cart',
      component: PokimonCartComponent,
    }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
