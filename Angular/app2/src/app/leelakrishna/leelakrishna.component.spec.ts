import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeelakrishnaComponent } from './leelakrishna.component';

describe('LeelakrishnaComponent', () => {
  let component: LeelakrishnaComponent;
  let fixture: ComponentFixture<LeelakrishnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeelakrishnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeelakrishnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
