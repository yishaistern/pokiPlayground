import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokimonfavoritesComponent } from './pokimon-favorites.component';

describe('PokimonfavoritesComponent', () => {
  let component: PokimonfavoritesComponent;
  let fixture: ComponentFixture<PokimonfavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokimonfavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokimonfavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
