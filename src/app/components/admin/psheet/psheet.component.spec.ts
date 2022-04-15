import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsheetComponent } from './psheet.component';

describe('PsheetComponent', () => {
  let component: PsheetComponent;
  let fixture: ComponentFixture<PsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
