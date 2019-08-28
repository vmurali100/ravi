import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCommunicationComponent } from './server-communication.component';

describe('ServerCommunicationComponent', () => {
  let component: ServerCommunicationComponent;
  let fixture: ComponentFixture<ServerCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
