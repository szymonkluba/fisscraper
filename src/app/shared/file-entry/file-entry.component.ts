import { Component, Input, OnInit } from '@angular/core';
import { IFile } from "../../models/file.model";
import { FileStatuses } from "../../models/file-statuses.model";

@Component({
  selector: 'app-file-entry',
  templateUrl: './file-entry.component.html',
  styleUrls: ['./file-entry.component.scss']
})
export class FileEntryComponent implements OnInit {

  @Input() file!: IFile
  fileStatuses = FileStatuses

  constructor() { }

  ngOnInit(): void {
  }

}
