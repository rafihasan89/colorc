import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerformComponent } from './sellerform.component';

describe('SellerformComponent', () => {
  let component: SellerformComponent;
  let fixture: ComponentFixture<SellerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
