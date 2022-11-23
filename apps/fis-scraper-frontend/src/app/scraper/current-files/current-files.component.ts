import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { Download } from '@shared/models/download.model';
import { MatIconRegistry } from '@angular/material/icon';
import { MatListOption } from '@angular/material/list';
import { Observable, Subject, takeUntil } from 'rxjs';
import { RaceDetails } from '@shared/models/race.model';
import { ScraperService } from '../scraper.service';
import { Store } from '@ngrx/store';
import { selectRaces } from '@shared/state/races.selectors';
import { selectSpinnerState } from '@shared/state/spinner.selectors';
import { trackByUuid } from '@shared/utils/track-by/track-by';

@Component({
  selector: 'app-current-files',
  templateUrl: './current-files.component.html',
  styleUrls: ['./current-files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentFilesComponent implements OnInit, OnDestroy {
  files$!: Observable<readonly RaceDetails[]>;
  download$!: Observable<Download>;
  spinnerState$?: Observable<boolean>;
  destroySubject$ = new Subject();
  destroy$: Observable<unknown> = this.destroySubject$.asObservable();
  trackByUuid = trackByUuid;

  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer,
    private readonly scraperService: ScraperService,
    private readonly store: Store
  ) {
    iconRegistry.addSvgIcon(
      'csv_file',
      sanitizer.bypassSecurityTrustResourceUrl('assets/csv.svg')
    );
    iconRegistry.addSvgIcon(
      'zip_file',
      sanitizer.bypassSecurityTrustResourceUrl('assets/zip.svg')
    );
  }

  ngOnInit(): void {
    this.files$ = this.store.select(selectRaces);
    this.spinnerState$ = this.store.select(selectSpinnerState);
  }

  downloadAll(races: MatListOption[]) {
    const uuids = races.map(
      (selectedOption: MatListOption) => selectedOption.value
    );

    this.scraperService
      .downloadSelectedFiles(uuids)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  downloadFile(event: MouseEvent, race: RaceDetails) {
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();

    this.scraperService
      .downloadFile(race)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(null);
  }
}
