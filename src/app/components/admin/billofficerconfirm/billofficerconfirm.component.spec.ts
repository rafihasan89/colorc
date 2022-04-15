import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillofficerconfirmComponent } from './billofficerconfirm.component';

describe('BillofficerconfirmComponent', () => {
  let component: BillofficerconfirmComponent;
  let fixture: ComponentFixture<BillofficerconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillofficerconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillofficerconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
