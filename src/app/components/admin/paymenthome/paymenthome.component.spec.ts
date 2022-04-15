import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenthomeComponent } from './paymenthome.component';

describe('PaymenthomeComponent', () => {
  let component: PaymenthomeComponent;
  let fixture: ComponentFixture<PaymenthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymenthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymenthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
