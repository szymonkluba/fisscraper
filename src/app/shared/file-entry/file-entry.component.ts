import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IFile } from "../../models/file.model";
import { FileStatuses } from "../../models/file-statuses.model";
import { DropboxService } from "../../services/dropbox.service";
import { Observable } from "rxjs";
import { Download } from "../../models/download.model";

@Component({
  selector: 'app-file-entry',
  templateUrl: './file-entry.component.html',
  styleUrls: ['./file-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileEntryComponent implements OnInit {

  @Input() file!: IFile
  fileStatuses = FileStatuses
  download$?: Observable<Download>

  constructor(
    private dropbox: DropboxService
  ) {
  }

  ngOnInit(): void {
  }

  download(): void {
    console.log("in download", this.file);
    this.download$ = this.dropbox.downloadFile(this.file);
    this.file.fis_id && this.download$.subscribe()
  }
}
