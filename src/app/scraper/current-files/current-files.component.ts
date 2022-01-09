import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { IFile } from "../../models/file.model";
import { selectFiles } from "../../state/files.selectors";
import { Observable } from "rxjs";
import { DropboxService } from "../../services/dropbox.service";
import { Download } from "../../models/download.model";

@Component({
  selector: 'app-current-files',
  templateUrl: './current-files.component.html',
  styleUrls: ['./current-files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentFilesComponent implements OnInit {

  files$!: Observable<readonly IFile[]>
  download$!: Observable<Download>

  constructor(
    private store: Store,
    private dropbox: DropboxService
  ) { }

  ngOnInit(): void {
    this.files$ = this.store.select(selectFiles)
  }

  downloadAll(files: readonly IFile[]) {
    this.download$ = this.dropbox.downloadCurrentFiles(files)
  }
}
