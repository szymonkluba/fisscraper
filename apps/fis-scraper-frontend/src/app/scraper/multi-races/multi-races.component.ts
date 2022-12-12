import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { ScraperService } from '../../services/scraper.service';
import { trackByIndex } from '@shared/utils/track-by/track-by';
import { Race } from '@shared/models/race.model';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-multi-races',
  templateUrl: './multi-races.component.html',
  styleUrls: ['./multi-races.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiRacesComponent {
  readonly fisId: FormControl[] = [];
  readonly details: FormControl = new FormControl(false);
  progress$?: Observable<number>;
  trackByIndex = trackByIndex;

  races: Race[] = [];
  readonly separatorKeyCodes = [COMMA, ENTER, SPACE] as const;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly scraperService: ScraperService
  ) {}

  addRace(event: MatChipInputEvent): void {
    const value = Number((event.value || '').trim());

    if (value > 0) {
      this.races.push({
        fis_id: value,
        details: false,
      });
    }

    event.chipInput.clear();
  }

  removeRace(race: Race): void {
    const index = this.races.indexOf(race);

    if (index > -1) {
      this.races.splice(index, 1);
    }
  }

  submit(): void {
    if (this.races.length > 0) {
      this.progress$ = this.scraperService.scrapMultipleRaces(this.races);
    }
  }

  changeDetailsState(race: Race): void {
    const index = this.races.indexOf(race);

    if (index > -1) {
      this.races[index].details = !this.races[index].details;
    }
  }
}
