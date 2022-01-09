import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { IFile } from "../../models/file.model";
import { DropboxService } from "../../services/dropbox.service";

@Component({
  selector: 'app-folder-contents',
  templateUrl: './folder-contents.component.html',
  styleUrls: ['./folder-contents.component.scss'],
})
export class FolderContentsComponent implements OnInit {

  folder!: string;
  files$?: Observable<readonly IFile[]>;

  constructor(
    private route: ActivatedRoute,
    private dropbox: DropboxService,
  ) { }

  ngOnInit(): void {
    this.folder = this.route.snapshot.paramMap.get("folder")!
    this.files$ = this.dropbox.getFiles(this.folder)
  }
}
