import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRacesComponent } from './multi-races.component';

describe('MultiRacesComponent', () => {
  let component: MultiRacesComponent;
  let fixture: ComponentFixture<MultiRacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiRacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
