import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsnotaccepComponent } from './studentsnotaccep.component';

describe('StudentsnotaccepComponent', () => {
  let component: StudentsnotaccepComponent;
  let fixture: ComponentFixture<StudentsnotaccepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsnotaccepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsnotaccepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
