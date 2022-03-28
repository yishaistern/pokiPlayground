import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { getfavorites } from './ngrx/actions';
import { openCard } from './ngrx/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  openCard: Observable<boolean> = of(false);
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.openCard = this.store.select(openCard);
    this.store.dispatch(getfavorites());
  }

}