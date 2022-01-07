import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { range } from "../../utils/range";
import { Race } from "../../models/race.model";
import { ScraperService } from "../../services/scraper.service";
import { Store } from "@ngrx/store";
import { addFile } from "../../state/files.actions";

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

  constructor(
    private formBuilder: FormBuilder,
    private scraperService: ScraperService,
    private store: Store
  ) {
    this.raceForm = this.formBuilder.group({
      start_fis_id: this.startFisId,
      end_fis_id: this.endFisId,
      details: this.details
    })
  }



  submit(): void {
    const data = this.raceForm.value
    const races: Race[] = range(data.start_fis_id, data.end_fis_id, 1).map((fisId) => ({
      fis_id: fisId,
      details: data.details
    }))
    this.scraperService.scrapMultipleRaces(races).subscribe((results) => {
      results.forEach((file) => this.store.dispatch(addFile({ file: file })))
    })
  }

  ngOnInit(): void {
  }

}
