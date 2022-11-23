import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RaceDetails } from '@shared/models/race.model';

@Component({
  selector: 'app-folder-table-cell',
  templateUrl: './folder-table-cell.component.html',
  styleUrls: ['./folder-table-cell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderTableCellComponent {
  @Input() item!: any;
  @Input() key!: string;
  @Input() expanded: boolean = false;

  @Output() readonly downloadRaceEvent = new EventEmitter<RaceDetails>();
  @Output() readonly expandEvent = new EventEmitter<RaceDetails | null>();

  constructor() {}

  downloadRace() {
    if (this.item) {
      this.downloadRaceEvent.emit(this.item);
    }
  }

  expandItem() {
    if (this.item) {
      this.expandEvent.emit(this.expanded ? null : this.item);
    }
  }
}
