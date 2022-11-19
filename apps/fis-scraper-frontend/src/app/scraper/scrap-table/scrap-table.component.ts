import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ScraperService } from '../../services/scraper.service';
import { MatDialog } from '@angular/material/dialog';
import { ScrapTableDialogComponent } from './scrap-table-dialog.component';

@Component({
  selector: 'app-scrap-table',
  templateUrl: './scrap-table.component.html',
  styleUrls: ['./scrap-table.component.scss'],
})
export class ScrapTableComponent {
  form: FormGroup;
  fisId: FormControl = new FormControl('', [Validators.required]);
  details: FormControl = new FormControl(false);
  progress$?: Observable<number> = of(0);

  constructor(
    private readonly dialog: MatDialog,
    private readonly formBuilder: FormBuilder,
    private readonly scraperService: ScraperService
  ) {
    this.form = this.formBuilder.group({
      url: this.fisId,
    });
  }

  submit() {
    if (this.form.valid) {
      this.progress$ = this.scraperService.scrapTable(this.form.value);
    }
  }

  openDialog() {
    this.dialog.open(ScrapTableDialogComponent);
  }
}
