import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { IFile } from "../../models/file.model";
import { selectFiles } from "../../state/files.selectors";
import { Observable } from "rxjs";

@Component({
  selector: 'app-current-files',
  templateUrl: './current-files.component.html',
  styleUrls: ['./current-files.component.scss']
})
export class CurrentFilesComponent implements OnInit {

  files$!: Observable<readonly IFile[]>

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.files$ = this.store.select(selectFiles)
  }

}
