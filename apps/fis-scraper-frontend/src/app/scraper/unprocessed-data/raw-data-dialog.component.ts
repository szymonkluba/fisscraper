import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-raw-data-dialog',
  templateUrl: './dialog/dialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RawDataDialogComponent {}
