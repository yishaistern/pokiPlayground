import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getfavorites } from 'src/app/ngrx/actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getfavorites());
  }

}
