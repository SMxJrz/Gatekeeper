import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MatIconModule, MatSidenavModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        AppRoutingModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatIconModule
    ],
    providers: [],
})
export class MainModule { }
