import { TestBed } from '@angular/core/testing';

import { favoritesService } from './favorites.service';

describe('favoritesService', () => {
  let service: favoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(favoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
