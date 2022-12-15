import {
  ChangeDetectionStrategy,
  Component, HostBinding,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

enum SpinnerInput {
  OVERALL_PROGRESS = 'overallProgress',
  PROGRESS = 'progress',
  HAS_ERROR = 'hasError',
}

enum SpinnerMode {
  INDETERMINATE = 'indeterminate',
  DETERMINATE = 'determinate'
}

enum SpinnerColor {
  ACCENT = 'accent',
  WARN = 'warn',
}

enum LabelColor {
  ACCENT = '#69f0ae',
  WARN = '#f44336',
}

@Component({
  selector: 'app-file-spinner',
  templateUrl: './file-spinner.component.html',
  styleUrls: ['./file-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileSpinnerComponent implements OnChanges {
  @HostBinding('style.opacity') opacity = '0';
  @Input() overallProgress: number = 0;
  @Input() progress: number = 0;
  @Input() hasError: boolean = false;

  hidden!: boolean;

  value!: number;
  mode!: ProgressSpinnerMode;
  color!: SpinnerColor;
  labelColor!: LabelColor;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes[SpinnerInput.PROGRESS] || changes[SpinnerInput.OVERALL_PROGRESS]) {
      this.hidden = !this.overallProgress;
      this.value = (this.progress / this.overallProgress) * 100;
      this.mode =
        this.overallProgress === 1 || this.progress === 0
          ? SpinnerMode.INDETERMINATE
          : SpinnerMode.DETERMINATE;
      this.opacity = this.overallProgress && this.progress !== this.overallProgress ? '1' : '0';
    }
    if (changes[SpinnerInput.HAS_ERROR]) {
      this.color = this.hasError ? SpinnerColor.WARN : SpinnerColor.ACCENT;
      this.labelColor = this.hasError ? LabelColor.WARN : LabelColor.ACCENT;
    }
  }
}
