import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { IFile } from '../../models/file.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Download } from '../../models/download.model';
import { selectSpinnerState } from '../../state/spinner.selectors';
import { selectRaces } from '../../state/races.selectors';
import { RaceDetails } from '../../models/race.model';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ScraperService } from '../../services/scraper.service';
import { MatListOption } from '@angular/material/list';

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

  downloadFile(race: RaceDetails) {
    this.scraperService
      .downloadFile(race)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(null);
  }
}
