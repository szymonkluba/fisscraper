import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ScraperService } from "../../services/scraper.service";
import { Store } from "@ngrx/store";
import { addFile } from "../../state/files.actions";
import { catchError, of } from "rxjs";
import { getErrorMessage } from "../../utils/getErrorMessage";

@Component({
  selector: 'app-single-race',
  templateUrl: './single-race.component.html',
  styleUrls: ['./single-race.component.scss']
})
export class SingleRaceComponent {

  raceForm: FormGroup;
  fisId: FormControl = new FormControl(0, [Validators.required, Validators.min(1), Validators.pattern('[0-9]*')]);
  details: FormControl = new FormControl(false);

  constructor(
    private formBuilder: FormBuilder,
    private scraperService: ScraperService,
    private store: Store,
  ) {
    this.raceForm = this.formBuilder.group({
      fis_id: this.fisId,
      details: this.details
    })
  }

  submit() {
    this.scraperService.scrapRace(this.raceForm.value)
      .pipe(
        catchError(err => of({
          ...err.error,
          name: getErrorMessage(err.status),
        }))
      )
      .subscribe(
      (file) => {
        return this.store.dispatch(addFile({ file }))
      }
    )
  }
}
