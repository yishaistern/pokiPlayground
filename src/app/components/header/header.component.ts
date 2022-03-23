import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { selectFavorites } from 'src/app/ngrx/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  favoritCount: Observable<number> | undefined;
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.favoritCount = this.store.select(selectFavorites).pipe(
      map((favorites) => favorites.length)
    )
  }

}
