import { Component, Input, OnInit } from '@angular/core';
import { IFile } from "../../models/file.model";
import { FileStatuses } from "../../models/file-statuses.model";
import { DropboxService } from "../../services/dropbox.service";
import { Observable } from "rxjs";
import { Download } from "../../models/download.model";

@Component({
  selector: 'app-file-entry',
  templateUrl: './file-entry.component.html',
  styleUrls: ['./file-entry.component.scss']
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
    this.download$ = this.dropbox.downloadFile(this.file.id!, this.file.name!)
  }
}
