import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedstudentsComponent } from './acceptedstudents.component';

describe('AcceptedstudentsComponent', () => {
  let component: AcceptedstudentsComponent;
  let fixture: ComponentFixture<AcceptedstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
