import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Observable, of } from 'rxjs';
import { ScraperService } from '@scraper/scraper.service';

@Component({
  selector: 'app-single-race',
  templateUrl: './single-race.component.html',
  styleUrls: ['./single-race.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleRaceComponent {
  raceForm: FormGroup;
  fisId: FormControl = new FormControl(0, [
    Validators.required,
    Validators.min(1),
    Validators.pattern('[0-9]*'),
  ]);
  details: FormControl = new FormControl(false);
  progress$?: Observable<number> = of(0);

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly scraperService: ScraperService
  ) {
    this.raceForm = this.formBuilder.group({
      fis_id: this.fisId,
      details: this.details,
    });
  }

  submit() {
    if (this.raceForm.valid) {
      this.progress$ = this.scraperService.scrapRace(this.raceForm.value);
    }
  }
}
