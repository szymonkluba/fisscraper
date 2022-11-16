import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ScraperService } from '../../../services/scraper.service';
import { Observable } from 'rxjs';
import { RaceDetails } from '../../../models/race.model';
import { COUNTRY_TABLE_COLUMNS, JUMPER_TABLE_COLUMNS } from './constants';
import { MatTable } from '@angular/material/table';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-archive-race-details',
  templateUrl: './archive-race-details.component.html',
  styleUrls: ['./archive-race-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchiveRaceDetailsComponent implements OnChanges, OnInit {
  @ViewChild(MatTable) table?: MatTable<any>;

  @Input() uuid!: string;

  readonly countriesColumns = COUNTRY_TABLE_COLUMNS;
  readonly jumpersColumns = JUMPER_TABLE_COLUMNS;

  raceData$?: Observable<RaceDetails>;
  prefixRegex = new RegExp(/[a-z]*-|jump_\d/gm);

  constructor(
    private readonly scraperService: ScraperService,
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
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
      this.raceData$ = this.scraperService.getRaceDetails(this.uuid);
    }
  }

  getNestedValue(item: object, path: string) {
    return path.split('-').reduce((obj: object, key: string) => {
      if (hasProperty(obj, key)) {
        return obj[key];
      }
      return obj;
    }, item);
  }
}

function hasProperty(
  obj: object,
  key: string | number | symbol
): key is keyof typeof obj {
  return obj.hasOwnProperty(key);
}
