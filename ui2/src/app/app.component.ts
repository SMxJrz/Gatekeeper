import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _router: Router) {
      this._iconRegistry.addSvgIconInNamespace('assets', 'gatekeeper_logo',
        this._domSanitizer.bypassSecurityTrustResourceUrl('assets/gatekeeper.svg'));
      if (!localStorage.getItem('firstTimeLoad')) {
        localStorage.setItem('firstTimeLoad', 'false');
        this._router.navigate(['/intro']);
      }
  }
}
