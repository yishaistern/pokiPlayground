import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokimonListComponent } from './pokimon-list.component';

describe('PokimonListComponent', () => {
  let component: PokimonListComponent;
  let fixture: ComponentFixture<PokimonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokimonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokimonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
