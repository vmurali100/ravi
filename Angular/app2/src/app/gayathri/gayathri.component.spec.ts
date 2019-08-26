import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GayathriComponent } from './gayathri.component';

describe('GayathriComponent', () => {
  let component: GayathriComponent;
  let fixture: ComponentFixture<GayathriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GayathriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GayathriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
