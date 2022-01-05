import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-single-race',
  templateUrl: './single-race.component.html',
  styleUrls: ['./single-race.component.scss']
})
export class SingleRaceComponent {

  raceForm: FormGroup;
  fisId: FormControl = new FormControl(0, [Validators.required, Validators.min(1), Validators.pattern('[0-9]*')]);
  details: FormControl = new FormControl(false);

  constructor(private formBuilder: FormBuilder) {
    this.raceForm = this.formBuilder.group({
      fis_id: this.fisId,
      details: this.details
    })
  }

  submit() {
    console.log(this.raceForm.value)
  }
}
