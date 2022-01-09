import { Component, Input, OnInit } from '@angular/core';
import { Folder } from "../../models/folder.model";
import { Observable } from "rxjs";
import { Download } from "../../models/download.model";
import { DropboxService } from "../../services/dropbox.service";

@Component({
  selector: 'app-folder-entry',
  templateUrl: './folder-entry.component.html',
  styleUrls: ['./folder-entry.component.scss']
})
export class FolderEntryComponent implements OnInit {

  @Input() folder!: Folder
  download$?: Observable<Download>

  constructor(
    private dropbox: DropboxService
  ) { }

  ngOnInit(): void {
  }

  download() {
    this.download$ = this.dropbox.downloadFolder(this.folder)
  }

}
