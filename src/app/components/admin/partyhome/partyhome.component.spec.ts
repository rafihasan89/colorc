import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyhomeComponent } from './partyhome.component';

describe('PartyhomeComponent', () => {
  let component: PartyhomeComponent;
  let fixture: ComponentFixture<PartyhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
