import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokimonCartComponent } from './pokimon-cart.component';

describe('PokimonCartComponent', () => {
  let component: PokimonCartComponent;
  let fixture: ComponentFixture<PokimonCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokimonCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokimonCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
