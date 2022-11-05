import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ScraperService } from "../../services/scraper.service";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-single-race',
  templateUrl: './single-race.component.html',
  styleUrls: ['./single-race.component.scss']
})
export class SingleRaceComponent {

  raceForm: FormGroup;
  fisId: FormControl = new FormControl(0, [Validators.required, Validators.min(1), Validators.pattern('[0-9]*')]);
  details: FormControl = new FormControl(false);
  progress$?: Observable<number> = of(0)

  constructor(
    private formBuilder: FormBuilder,
    private scraperService: ScraperService,
  ) {
    this.raceForm = this.formBuilder.group({
      fis_id: this.fisId,
      details: this.details
    })
  }

  submit() {
    this.progress$ = this.scraperService.scrapRace(this.raceForm.value)
  }
}
