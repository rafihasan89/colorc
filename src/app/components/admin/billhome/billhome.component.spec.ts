import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillhomeComponent } from './billhome.component';

describe('BillhomeComponent', () => {
  let component: BillhomeComponent;
  let fixture: ComponentFixture<BillhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
