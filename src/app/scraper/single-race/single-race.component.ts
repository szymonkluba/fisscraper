import { Component, OnInit } from '@angular/core';
import { Race } from "../../models/race.model";
import { FormControl, Validators } from "@angular/forms";
import { InputErrorStateMatcher } from "../../../utils/InputErrorStateMatcher";

@Component({
  selector: 'app-single-race',
  templateUrl: './single-race.component.html',
  styleUrls: ['./single-race.component.scss']
})
export class SingleRaceComponent implements OnInit {

  race: Race = {
    fis_id: 0,
    details: false
  }

  fisIDFormControl = new FormControl('', [Validators.required, Validators.pattern(/\d*/mg)]);

  matcher = new InputErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

}
