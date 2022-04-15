import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PstatementComponent } from './pstatement.component';

describe('PstatementComponent', () => {
  let component: PstatementComponent;
  let fixture: ComponentFixture<PstatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PstatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
