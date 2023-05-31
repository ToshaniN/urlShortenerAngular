import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShortener2Component } from './url-shortener2.component';

describe('UrlShortener2Component', () => {
  let component: UrlShortener2Component;
  let fixture: ComponentFixture<UrlShortener2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlShortener2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlShortener2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
