import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveRaceDetailsComponent } from './archive-race-details.component';

describe('ArchiveRaceDetailsComponent', () => {
  let component: ArchiveRaceDetailsComponent;
  let fixture: ComponentFixture<ArchiveRaceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveRaceDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveRaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
