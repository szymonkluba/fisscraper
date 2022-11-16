import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-file-spinner',
  templateUrl: './file-spinner.component.html',
  styleUrls: ['./file-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileSpinnerComponent {
  constructor() {}
}
