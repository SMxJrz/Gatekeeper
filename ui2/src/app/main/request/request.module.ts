import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AdSearchModule } from '@gk/ad-search/ad-search.module';
import { ResourceComponent } from '@gk/resource/resource.component';
import { RequestComponent } from '@gk/request.component';


@NgModule({
  declarations: [
    ResourceComponent,
    RequestComponent
  ],
  imports: [
    AdSearchModule,
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
