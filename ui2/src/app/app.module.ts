import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { CovalentLayoutModule, CovalentStepsModule } from '@covalent/core';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroComponent } from './intro/intro.component';
import { RequestComponent } from './main/request/request.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IntroComponent,
    RequestComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
