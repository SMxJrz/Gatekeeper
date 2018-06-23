import { Component, OnInit } from '@angular/core';
import { IStepChangeEvent } from '@covalent/core/steps';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stepChanged(event: IStepChangeEvent) {
    console.info("I changed!");
  }
}
