import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { CovalentLayoutModule } from '@covalent/core';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IntroComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CovalentLayoutModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
