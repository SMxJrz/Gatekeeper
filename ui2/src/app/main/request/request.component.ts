import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { ResourceComponent } from '@gk/resource/resource.component';
import { AdSearchComponent } from '@gk/ad-search/ad-search.component';

@Component({
  selector: 'gk-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  @ViewChild(ResourceComponent) requestType: ResourceComponent;
  @ViewChild(AdSearchComponent) adSearch: AdSearchComponent;
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
