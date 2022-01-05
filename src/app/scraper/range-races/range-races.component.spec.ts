import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeRacesComponent } from './range-races.component';

describe('RangeRacesComponent', () => {
  let component: RangeRacesComponent;
  let fixture: ComponentFixture<RangeRacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeRacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
