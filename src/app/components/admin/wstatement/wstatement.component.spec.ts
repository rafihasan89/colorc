import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WstatementComponent } from './wstatement.component';

describe('WstatementComponent', () => {
  let component: WstatementComponent;
  let fixture: ComponentFixture<WstatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WstatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
