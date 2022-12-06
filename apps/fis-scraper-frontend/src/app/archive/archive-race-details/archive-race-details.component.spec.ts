import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveRaceDetailsComponent } from './archive-race-details.component';

describe('ArchiveRaceDetailsComponent', () => {
  let component: ArchiveRaceDetailsComponent;
  let fixture: ComponentFixture<ArchiveRaceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveRaceDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArchiveRaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
