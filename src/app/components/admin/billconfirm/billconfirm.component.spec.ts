import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillconfirmComponent } from './billconfirm.component';

describe('BillconfirmComponent', () => {
  let component: BillconfirmComponent;
  let fixture: ComponentFixture<BillconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
