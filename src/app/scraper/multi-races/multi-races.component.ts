import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ScraperService } from "../../services/scraper.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-multi-races',
  templateUrl: './multi-races.component.html',
  styleUrls: ['./multi-races.component.scss']
})
export class MultiRacesComponent {

  raceForm: FormGroup;
  fisId: FormControl[] = [];
  details: FormControl = new FormControl(false);
  progress$?: Observable<number>;

  constructor(
    private formBuilder: FormBuilder,
    private scraperService: ScraperService,
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
    this.progress$ = this.scraperService.scrapMultipleRaces(this.races().value);
  }

}
