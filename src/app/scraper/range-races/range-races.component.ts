import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-range-races',
  templateUrl: './range-races.component.html',
  styleUrls: ['./range-races.component.scss']
})
export class RangeRacesComponent implements OnInit {

  raceForm: FormGroup
  startFisId: FormControl = new FormControl(0, [Validators.required, Validators.min(1), Validators.pattern(/\d*/)]);
  endFisId: FormControl = new FormControl(0, [Validators.required, Validators.min(1), Validators.pattern(/\d*/)]);
  details: FormControl = new FormControl(false)

  constructor(private formBuilder: FormBuilder) {
    this.raceForm = this.formBuilder.group({
      start_fis_id: this.startFisId,
      end_fis_id: this.endFisId,
      details: this.details
    })
  }

  ngOnInit(): void {
  }

}
