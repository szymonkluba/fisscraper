import { Component, Input, OnInit } from '@angular/core';
import { Folder } from "../../models/folder.model";

@Component({
  selector: 'app-folder-entry',
  templateUrl: './folder-entry.component.html',
  styleUrls: ['./folder-entry.component.scss']
})
export class FolderEntryComponent implements OnInit {

  @Input() folder!: Folder

  constructor() { }

  ngOnInit(): void {
  }

}
