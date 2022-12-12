import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFilesComponent } from './current-files.component';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { RaceDetails } from '@shared/models/race.model';
import { ScraperService } from '../../services/scraper.service';

class ScraperServiceMock {}

class StoreMock {
  select(): Observable<ReadonlyArray<RaceDetails>> {
    return of([
      {
        uuid: 'test',
        fis_id: 1234,
        place: 'test_place',
        tournament: {
          id: 1,
          name: 'test_tournament_name',
        },
        date: new Date(2022, 11, 1).toISOString(),
        kind: 'men',
        hill_size: 'string',
        details: true,
        participant_set: [],
        no_jump_1: true,
        no_jump_2: true,
        participantcountry_set: [],
      },
    ]);
  }
}

describe('CurrentFilesComponent', () => {
  let component: CurrentFilesComponent;
  let fixture: ComponentFixture<CurrentFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentFilesComponent],
      providers: [
        { provide: Store, useClass: StoreMock },
        { provide: ScraperService, useClass: ScraperServiceMock },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CurrentFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
