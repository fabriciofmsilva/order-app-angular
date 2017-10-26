import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed = true;
  _isNavbarCollapsedAnim = 'closed';

  constructor() { }

  ngOnInit() {
    this.onResize(window);
  }
  @HostListener('window:resize', ['$event.target'])
  onResize(event) {
    if (event.innerWidth > 736) {
      this._isNavbarCollapsedAnim = 'open';
      this.isNavbarCollapsed = true;
    }
  }

  toggleNavbar(): void {
    if (this.isNavbarCollapsed) {
      this._isNavbarCollapsedAnim = 'open';
      this.isNavbarCollapsed = false;
    } else {
    this._isNavbarCollapsedAnim = 'closed';
      this.isNavbarCollapsed = true;
    }
  }

}
