import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test01Page } from './test01.page';

describe('Test01Page', () => {
  let component: Test01Page;
  let fixture: ComponentFixture<Test01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
