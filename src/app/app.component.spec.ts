import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent } from './core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should have a router outlet', () => {
    const de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  });

  it('should have a header component', () => {
    const de = fixture.debugElement.query(By.directive(HeaderComponent));

    expect(de).not.toBeNull();
  });

  it('should have a footer component', () => {
    const de = fixture.debugElement.query(By.directive(FooterComponent));

    expect(de).not.toBeNull();
  });
});
