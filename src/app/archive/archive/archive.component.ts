import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { selectFiles } from "../../state/files.selectors";
import { Folder } from "../../models/folder.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private store: Store) { }

  folders$!: Observable<readonly Folder[]>

  ngOnInit(): void {
    this.folders$ = this.store.select(selectFiles)
  }

}
