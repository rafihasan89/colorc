import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchhomeComponent } from './branchhome.component';

describe('BranchhomeComponent', () => {
  let component: BranchhomeComponent;
  let fixture: ComponentFixture<BranchhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
