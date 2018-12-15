import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import { RequestComponent } from './request.component';

import { ResourceComponent } from './resource/resource.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ResourceComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
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
