import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }
  goNext(stepper: MatStepper) {
    stepper.next();
  }
}
