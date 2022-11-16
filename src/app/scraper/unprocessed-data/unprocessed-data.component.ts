import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";
import { ScraperService } from "../../services/scraper.service";

@Component({
  selector: 'app-unprocessed-data',
  templateUrl: './unprocessed-data.component.html',
  styleUrls: ['./unprocessed-data.component.scss']
})
export class UnprocessedDataComponent {

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
    this.progress$ = this.scraperService.scrapRawData(this.raceForm.value)
  }
}
