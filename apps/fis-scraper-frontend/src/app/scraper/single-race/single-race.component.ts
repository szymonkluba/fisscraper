import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Race } from '@shared/models/race.model';

import * as racesActions from '../store/races.actions';
import * as racesSelectors from '../store/races.selectors';

interface RaceForm {
  fis_id: FormControl<number | null>;
  details: FormControl<boolean | null>;
}

@Component({
  selector: 'app-single-race',
  templateUrl: './single-race.component.html',
  styleUrls: ['./single-race.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleRaceComponent {
  readonly raceFormControls: RaceForm = {
    fis_id: new FormControl<number>(0, [
      Validators.required,
      Validators.min(1),
      Validators.pattern('[0-9]*'),
    ]),
    details: new FormControl<boolean>(false),
  };
  readonly raceForm: FormGroup<RaceForm> = new FormGroup<RaceForm>(
    this.raceFormControls
  );
  progress$: Observable<number> = this.store.select(
    racesSelectors.selectProgress
  );
  overallProgress$: Observable<number> = this.store.select(
    racesSelectors.selectOverallProgress
  );

  constructor(private readonly store: Store) {}

  submit() {
    if (!this.raceForm.valid) return;
    if (this.raceForm.value.fis_id) {
      const race: Race = {
        fis_id: this.raceForm.value.fis_id,
        details: this.raceForm.value.details || false,
      };
      this.store.dispatch(racesActions.scrapSingleRace({ race }));
    }
  }
}
