import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable } from 'rxjs';
import { Race } from '@shared/models/race.model';
import { ScraperService } from '@services/scraper.service';
import { Store } from '@ngrx/store';
import { scrapMultipleRaces } from '@scraper/store/races.actions';
import { trackByIndex } from '@shared/utils/track-by/track-by';

import * as racesSelectors from '@scraper/store/races.selectors';

const NUMBER_REGEX = new RegExp(/\d+/);

interface RacesForm {
  races: FormControl<number[] | null>;
  details: FormControl<boolean>;
}

function atLeastOneRequiredValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!Array.isArray(value)) {
      return { oneRequired: true };
    }

    return value.length === 0 ? { oneRequired: true } : null;
  };
}

function allNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!Array.isArray(value)) {
      return null;
    }

    if (value.length === 0) {
      return null;
    }

    return value.every(v => NUMBER_REGEX.test(v)) ? null : { numbers: true };
  };
}

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
  readonly racesFormControl = new FormControl<number[]>(
    [],
    [allNumbersValidator(), atLeastOneRequiredValidator()]
  );
  readonly racesForm = new FormGroup<RacesForm>({
    races: this.racesFormControl,
    details: this.details,
  });
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
    console.log(this.racesFormControl.errors);
    if (this.races.length > 0) {
      this.store.dispatch(scrapMultipleRaces({ races: this.races }));
      this.racesFormControl.setValue([]);
      this.racesFormControl.markAsUntouched();
      this.races = [];
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
