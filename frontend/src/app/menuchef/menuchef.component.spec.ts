import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuchefComponent } from './menuchef.component';

describe('MenuchefComponent', () => {
  let component: MenuchefComponent;
  let fixture: ComponentFixture<MenuchefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuchefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
