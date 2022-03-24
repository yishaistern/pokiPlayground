import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokimonImageComponent } from './pokimon-image.component';

describe('PokimonImageComponent', () => {
  let component: PokimonImageComponent;
  let fixture: ComponentFixture<PokimonImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokimonImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokimonImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
