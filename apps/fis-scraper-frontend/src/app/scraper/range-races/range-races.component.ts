import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Observable } from 'rxjs';
import { ScraperService } from '@scraper/scraper.service';

@Component({
  selector: 'app-range-races',
  templateUrl: './range-races.component.html',
  styleUrls: ['./range-races.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeRacesComponent {
  raceForm: FormGroup;
  startFisId: FormControl = new FormControl(0, [
    Validators.required,
    Validators.min(1),
    Validators.pattern(/\d*/),
  ]);
  endFisId: FormControl = new FormControl(0, [
    Validators.required,
    Validators.min(1),
    Validators.pattern(/\d*/),
  ]);
  details: FormControl = new FormControl(false);
  progress$?: Observable<number>;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly scraperService: ScraperService
  ) {
    this.raceForm = this.formBuilder.group({
      start_fis_id: this.startFisId,
      end_fis_id: this.endFisId,
      details: this.details,
    });
  }

  submit(): void {
    if (this.raceForm.valid) {
      this.progress$ = this.scraperService.scrapRangeOfRaces(
        this.raceForm.value
      );
    }
  }
}
