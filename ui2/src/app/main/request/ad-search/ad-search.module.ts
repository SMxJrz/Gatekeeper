import { NgModule } from '@angular/core';
import { AdSearchComponent } from '@gk/ad-search/ad-search.component';
import { MatButtonModule, MatInputModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
      AdSearchComponent
  ],
  imports: [
      CommonModule,
      FlexLayoutModule,
      FormsModule,
      MatButtonModule,
      MatInputModule,
      MatTableModule
  ],
  exports: [
      AdSearchComponent
  ],
  providers: [],
  bootstrap: []
})
export class AdSearchModule { }
