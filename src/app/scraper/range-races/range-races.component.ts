import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ScraperService } from "../../services/scraper.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-range-races',
  templateUrl: './range-races.component.html',
  styleUrls: ['./range-races.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeRacesComponent {

  raceForm: FormGroup
  startFisId: FormControl = new FormControl(0, [Validators.required, Validators.min(1), Validators.pattern(/\d*/)]);
  endFisId: FormControl = new FormControl(0, [Validators.required, Validators.min(1), Validators.pattern(/\d*/)]);
  details: FormControl = new FormControl(false)
  progress$?: Observable<number>;

  constructor(
    private formBuilder: FormBuilder,
    private scraperService: ScraperService,
  ) {
    this.raceForm = this.formBuilder.group({
      start_fis_id: this.startFisId,
      end_fis_id: this.endFisId,
      details: this.details
    })
  }

  submit(): void {
    this.progress$ = this.scraperService.scrapRangeOfRaces(this.raceForm.value);
  }
}
