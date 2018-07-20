import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import { CovalentLayoutModule } from '@covalent/core';
import { RequestComponent } from './request.component';
import { Observable } from 'rxjs';

import { ResourceComponent } from './resource/resource.component';

@NgModule({
  declarations: [
    ResourceComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    MatStepperModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [RequestComponent]
})
export class RequestModule { }
