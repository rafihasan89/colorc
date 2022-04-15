import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsheetComponent } from './dsheet.component';

describe('DsheetComponent', () => {
  let component: DsheetComponent;
  let fixture: ComponentFixture<DsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
