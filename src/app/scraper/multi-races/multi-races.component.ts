import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ScraperService } from "../../services/scraper.service";
import { Store } from "@ngrx/store";
import { addFile } from "../../state/files.actions";

@Component({
  selector: 'app-multi-races',
  templateUrl: './multi-races.component.html',
  styleUrls: ['./multi-races.component.scss']
})
export class MultiRacesComponent {

  raceForm: FormGroup;
  fisId: FormControl[] = [];
  details: FormControl = new FormControl(false);

  constructor(
    private formBuilder: FormBuilder,
    private scraperService: ScraperService,
    private store: Store,
  ) {
    this.raceForm = this.formBuilder.group({
      races: this.formBuilder.array([this.newRace()]),
    })
  }

  races(): FormArray {
    return this.raceForm.get("races") as FormArray
  }

  newRace(): FormGroup {
    this.fisId.push(new FormControl(0, [Validators.required, Validators.min(1), Validators.pattern(/\d*/)]))
    return this.formBuilder.group({
      fis_id: this.fisId[this.fisId.length - 1],
      details: this.details
    })
  }

  addInput() {
    this.races().push(this.newRace());
  }

  removeInput() {
    this.fisId.pop();
    this.races().removeAt(this.races().length - 1);
  }

  submit() {
    const dataArray = this.races().value
    this.scraperService.scrapMultipleRaces(dataArray)
      .subscribe(results => results.forEach((result) => {
      this.store.dispatch(addFile({ file: result }))
    }))
  }

}
