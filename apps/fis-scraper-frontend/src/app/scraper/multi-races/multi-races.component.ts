import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Observable } from 'rxjs';
import { ScraperService } from '@scraper/scraper.service';
import { trackByIndex } from '@shared/utils/track-by/track-by';

@Component({
  selector: 'app-multi-races',
  templateUrl: './multi-races.component.html',
  styleUrls: ['./multi-races.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiRacesComponent {
  readonly fisId: FormControl[] = [];
  readonly details: FormControl = new FormControl(false);
  raceForm: FormGroup;
  progress$?: Observable<number>;
  trackByIndex = trackByIndex;
  races: FormArray;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly scraperService: ScraperService
  ) {
    this.raceForm = this.formBuilder.group({
      races: this.formBuilder.array([this.newRace()]),
    });
    this.races = this.raceForm.get('races')! as FormArray;
  }

  newRace(): FormGroup {
    this.fisId.push(
      new FormControl(0, [
        Validators.required,
        Validators.min(1),
        Validators.pattern(/\d*/),
      ])
    );
    return this.formBuilder.group({
      fis_id: this.fisId[this.fisId.length - 1],
      details: this.details,
    });
  }

  addInput() {
    this.races.push(this.newRace());
  }

  removeInput() {
    this.fisId.pop();
    this.races.removeAt(this.races.length - 1);
  }

  submit() {
    if (this.raceForm.valid) {
      this.progress$ = this.scraperService.scrapMultipleRaces(
        this.raceForm.value['races']
      );
    }
  }
}
