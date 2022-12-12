import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { ScraperService } from '@services/scraper.service';
import { Observable, of, switchMap, tap } from 'rxjs';
import { RaceDetails } from '@shared/models/race.model';
import { COUNTRY_TABLE_COLUMNS, JUMPER_TABLE_COLUMNS } from './constants';
import { MatTable } from '@angular/material/table';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { selectRaceDetails } from '@store/raceDetails.selectors';
import { trackByIndex } from '@shared/utils/track-by/track-by';

@Component({
  selector: 'app-archive-race-details',
  templateUrl: './archive-race-details.component.html',
  styleUrls: ['./archive-race-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ArchiveRaceDetailsComponent
  implements OnChanges, OnInit, AfterViewChecked
{
  @ViewChild(MatTable) private readonly table?: MatTable<any>;

  @Input() uuid!: string;

  readonly countriesColumns = COUNTRY_TABLE_COLUMNS;
  readonly prefixRegex = new RegExp(/[a-z]*-|jump_\d/gm);

  jumpersColumns = JUMPER_TABLE_COLUMNS;
  wideColumns = ['jumper', 'jump1', 'jump2', 'summary'];
  raceData$?: Observable<RaceDetails>;
  trackByIndex = trackByIndex;

  constructor(
    private readonly scraperService: ScraperService,
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer,
    private readonly store: Store
  ) {}

  ngAfterViewChecked(): void {
    if (this.table) {
      this.table.updateStickyColumnStyles();
    }
  }

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(
      'finished',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/finished.svg')
    );
    this.iconRegistry.addSvgIcon(
      'disqualified',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/disqualified.svg')
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['uuid']) {
      const selector = selectRaceDetails({ uuid: this.uuid });

      this.raceData$ = this.store.select(selector).pipe(
        switchMap((raceDetails: RaceDetails | undefined) => {
          if (!raceDetails) {
            return this.scraperService.getRaceDetails(this.uuid);
          } else return of(raceDetails);
        }),
        tap((raceDetails: RaceDetails) => {
          if (raceDetails.no_jump_1 && raceDetails.no_jump_2) {
            this.wideColumns = [];
          }

          if (raceDetails.no_jump_1) {
            this.jumpersColumns = this.jumpersColumns.filter(
              column => !column.includes('jump_1')
            );
            this.wideColumns = this.wideColumns.filter(
              column => column !== 'jump1'
            );
          }

          if (raceDetails.no_jump_2) {
            this.jumpersColumns = this.jumpersColumns.filter(
              column => !column.includes('jump_2')
            );
            this.wideColumns = this.wideColumns.filter(
              column => column !== 'jump2'
            );
          }
        })
      );
    }
  }
}
