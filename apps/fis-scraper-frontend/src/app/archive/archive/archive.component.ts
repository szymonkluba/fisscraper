import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Folder } from '@shared/models/folder.model';
import { MatIconRegistry } from '@angular/material/icon';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { RaceDetails } from '@shared/models/race.model';
import { ScraperService } from '@services/scraper.service';
import { Store } from '@ngrx/store';
import {
  selectFolders,
  selectFoldersLoadStatus,
} from '@archive/store/folders.selectors';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { trackByIndex } from '@shared/utils/track-by/track-by';
import { loadFolders } from '@archive/store/folders.actions';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ArchiveComponent implements OnInit, OnDestroy {
  readonly displayedColumns: string[] = [
    'fis_id',
    'tournament',
    'place',
    'hill_size',
    'date',
    'kind',
    'details',
    'download',
    'expand',
  ];
  private readonly subscriptionEndSubject = new Subject();
  private readonly subscriptionEnd$ =
    this.subscriptionEndSubject.asObservable();

  expandedElement?: RaceDetails | null;

  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer,
    private readonly scraperService: ScraperService,
    private readonly store: Store
  ) {}

  readonly folders$: Observable<ReadonlyArray<Folder>> = this.store
    .select(selectFolders)
    .pipe(tap(folders => console.log(folders)));
  readonly foldersLoadStatus$: Observable<boolean> = this.store.select(
    selectFoldersLoadStatus
  );
  trackByIndex = trackByIndex;

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(
      'folder_icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/folder.svg')
    );
    this.iconRegistry.addSvgIcon(
      'men',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/men.svg')
    );
    this.iconRegistry.addSvgIcon(
      'women',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/women.svg')
    );
    this.iconRegistry.addSvgIcon(
      'team',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/team.svg')
    );
    this.iconRegistry.addSvgIcon(
      'other',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/other.svg')
    );
    this.store.dispatch(loadFolders());
  }

  ngOnDestroy() {
    this.subscriptionEndSubject.next(null);
    this.subscriptionEndSubject.complete();
  }

  downloadFolder(races: Array<RaceDetails>) {
    const uuids = races.map((race: RaceDetails) => race.uuid);

    this.scraperService
      .downloadSelectedFiles(uuids)
      .pipe(takeUntil(this.subscriptionEnd$))
      .subscribe();
  }

  downloadRace(race: RaceDetails) {
    this.scraperService
      .downloadFile(race)
      .pipe(takeUntil(this.subscriptionEnd$))
      .subscribe();
  }

  expandRace(race: RaceDetails | null) {
    this.expandedElement = race;
  }
}
