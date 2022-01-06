import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { IFile } from "../../models/file.model";
import { DropboxService } from "../../services/dropbox.service";
import { Store } from "@ngrx/store";
import { selectFolders } from "../../state/folders.selectors";
import { Folder } from "../../models/folder.model";

@Component({
  selector: 'app-folder-contents',
  templateUrl: './folder-contents.component.html',
  styleUrls: ['./folder-contents.component.scss']
})
export class FolderContentsComponent implements OnInit {

  folderName!: string;
  folder!: Folder;
  files$!: Observable<IFile[]>

  constructor(
    private route: ActivatedRoute,
    private dropbox: DropboxService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.files$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.folderName = params.get("folder")!;
        console.log(this.folderName);
        return this.store.select(selectFolders);
      }),
      switchMap(folders => {
        this.folder = folders.find(element => element.name === this.folderName)!
        return this.dropbox.getFiles(this.folder!.path_display)
      })
    )
  }

}
