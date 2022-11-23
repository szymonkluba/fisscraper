import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ScraperService } from '../scraper.service';
import { MatDialog } from '@angular/material/dialog';
import { RawDataDialogComponent } from './raw-data-dialog.component';

@Component({
  selector: 'app-unprocessed-data',
  templateUrl: './unprocessed-data.component.html',
  styleUrls: ['./unprocessed-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnprocessedDataComponent {
  raceForm: FormGroup;
  fisId: FormControl = new FormControl(0, [
    Validators.required,
    Validators.min(1),
    Validators.pattern('[0-9]*'),
  ]);
  details: FormControl = new FormControl(false);
  progress$?: Observable<number> = of(0);

  constructor(
    private readonly dialog: MatDialog,
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
      this.progress$ = this.scraperService.scrapRawData(this.raceForm.value);
    }
  }

  openDialog() {
    this.dialog.open(RawDataDialogComponent);
  }
}
