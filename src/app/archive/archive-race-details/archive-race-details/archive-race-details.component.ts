import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ScraperService } from '../../../services/scraper.service';
import { Subject, takeUntil } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {
  Participant,
  ParticipantCountry,
  RaceDetails,
} from '../../../models/race.model';
import { COUNTRY_TABLE_COLUMNS, JUMPER_TABLE_COLUMNS } from './constants';
import * as assert from 'assert';

@Component({
  selector: 'app-archive-race-details',
  templateUrl: './archive-race-details.component.html',
  styleUrls: ['./archive-race-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchiveRaceDetailsComponent implements OnInit, OnDestroy {
  @Input() uuid!: string;

  readonly countriesColumns = COUNTRY_TABLE_COLUMNS;
  readonly jumpersColumns = JUMPER_TABLE_COLUMNS;

  private readonly subscriptionEndSubject = new Subject();
  private readonly subscriptionEnd$ =
    this.subscriptionEndSubject.asObservable();

  readonly countriesTableDataSource: MatTableDataSource<ParticipantCountry> =
    new MatTableDataSource<ParticipantCountry>();
  readonly jumpersTableDataSource: MatTableDataSource<Participant> =
    new MatTableDataSource<Participant>();

  constructor(private readonly scraperService: ScraperService) {}

  ngOnInit(): void {
    this.scraperService
      .getRaceDetails(this.uuid)
      .pipe(takeUntil(this.subscriptionEnd$))
      .subscribe((raceDetails: RaceDetails) => {
        this.countriesTableDataSource.data =
          raceDetails.participantcountry_set || [];
        this.jumpersTableDataSource.data = raceDetails.participant_set || [];
      });
  }

  ngOnDestroy(): void {
    this.subscriptionEndSubject.next(null);
    this.subscriptionEndSubject.complete();
  }

  getNestedValue(item: object, path: string) {
    return path.split('-').reduce((obj, key) => {
      assert(hasProperty(obj, key));
      return obj[key];
    }, item);
  }
}

function hasProperty(
  obj: object,
  key: string | number | symbol
): key is keyof typeof obj {
  return obj.hasOwnProperty(key);
}
