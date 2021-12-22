import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefslistComponent } from './chefslist.component';

describe('ChefslistComponent', () => {
  let component: ChefslistComponent;
  let fixture: ComponentFixture<ChefslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
