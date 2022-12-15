import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { ScraperService } from '@services/scraper.service';
import { trackByIndex } from '@shared/utils/track-by/track-by';
import { Race } from '@shared/models/race.model';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import * as racesSelectors from '@scraper/store/races.selectors';
import { Store } from '@ngrx/store';
import { scrapMultipleRaces } from '@scraper/store/races.actions';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-multi-races',
  templateUrl: './multi-races.component.html',
  styleUrls: ['./multi-races.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiRacesComponent {
  races: Race[] = [];

  readonly details: FormControl = new FormControl(false);
  readonly overallProgress$: Observable<number> = this.store.select(
    racesSelectors.selectOverallProgress
  );
  readonly progress$: Observable<number> = this.store.select(
    racesSelectors.selectProgress
  );
  readonly racesFormControl = new FormControl<Array<Race>>(this.races, [
    Validators.required,
  ]);
  readonly separatorKeyCodes = [COMMA, ENTER, SPACE] as const;

  trackByIndex = trackByIndex;

  constructor(
    private readonly scraperService: ScraperService,
    private readonly store: Store
  ) {}

  addRace(event: MatChipInputEvent): void {
    const value = Number((event.value || '').trim());

    if (value > 0) {
      this.races.push({
        fis_id: value,
        details: false,
      });
    }

    event.chipInput.clear();
  }

  removeRace(race: Race): void {
    const index = this.races.indexOf(race);

    if (index > -1) {
      this.races.splice(index, 1);
    }
  }

  submit(): void {
    if (this.races.length > 0) {
      this.store.dispatch(scrapMultipleRaces({ races: this.races }));
    }
  }

  changeDetailsState(race: Race): void {
    const index = this.races.indexOf(race);

    if (index > -1) {
      this.races[index].details = !this.races[index].details;
    }
  }

  onDetailsToggleChange(event: MatSlideToggleChange) {
    this.races = this.races.map(race => ({ ...race, details: event.checked }));
  }
}
