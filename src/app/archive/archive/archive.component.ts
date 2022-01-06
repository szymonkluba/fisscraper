import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Folder } from "../../models/folder.model";
import { Observable } from "rxjs";
import { selectFolders } from "../../state/folders.selectors";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private store: Store) { }

  folders$!: Observable<readonly Folder[]>

  ngOnInit(): void {
    this.folders$ = this.store.select(selectFolders)
  }

}
