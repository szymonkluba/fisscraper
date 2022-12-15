import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { scrapRangeOfRaces } from '@scraper/store/races.actions';
import * as racesSelectors from '@scraper/store/races.selectors';

interface RaceForm {
  startFisId: FormControl<number>;
  endFisId: FormControl<number>;
  details: FormControl<boolean>;
}

@Component({
  selector: 'app-range-races',
  templateUrl: './range-races.component.html',
  styleUrls: ['./range-races.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeRacesComponent {
  readonly startFisId: FormControl = new FormControl<number>(0, [
    Validators.required,
    Validators.min(1),
    Validators.pattern(/\d*/),
  ]);
  readonly endFisId: FormControl = new FormControl<number>(0, [
    Validators.required,
    Validators.min(1),
    Validators.pattern(/\d*/),
  ]);
  readonly details: FormControl = new FormControl<boolean>(false);
  readonly raceForm: FormGroup<RaceForm> = new FormGroup<RaceForm>({
    startFisId: this.startFisId,
    endFisId: this.endFisId,
    details: this.details,
  });
  readonly overallProgress$: Observable<number> = this.store.select(
    racesSelectors.selectOverallProgress
  );
  readonly progress$: Observable<number> = this.store.select(
    racesSelectors.selectProgress
  );

  constructor(private readonly store: Store) {}

  submit(): void {
    if (!this.raceForm.valid) return;
    if (this.raceForm.value.endFisId && this.raceForm.value.startFisId) {
      this.store.dispatch(
        scrapRangeOfRaces({
          startFisId: this.raceForm.value.startFisId,
          endFisId: this.raceForm.value.endFisId,
          details: this.raceForm.value.details || false,
        })
      );
    }
  }
}
