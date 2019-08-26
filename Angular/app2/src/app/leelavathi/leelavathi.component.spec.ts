import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeelavathiComponent } from './leelavathi.component';

describe('LeelavathiComponent', () => {
  let component: LeelavathiComponent;
  let fixture: ComponentFixture<LeelavathiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeelavathiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeelavathiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
