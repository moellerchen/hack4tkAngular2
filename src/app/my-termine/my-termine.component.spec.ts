/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyTermineComponent } from './my-termine.component';

describe('MyTermineComponent', () => {
  let component: MyTermineComponent;
  let fixture: ComponentFixture<MyTermineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTermineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
