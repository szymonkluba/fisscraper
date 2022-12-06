import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRacesComponent } from './multi-races.component';

describe('MultiRacesComponent', () => {
  let component: MultiRacesComponent;
  let fixture: ComponentFixture<MultiRacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiRacesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
