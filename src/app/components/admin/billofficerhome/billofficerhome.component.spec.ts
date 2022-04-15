import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillofficerhomeComponent } from './billofficerhome.component';

describe('BillofficerhomeComponent', () => {
  let component: BillofficerhomeComponent;
  let fixture: ComponentFixture<BillofficerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillofficerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillofficerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
