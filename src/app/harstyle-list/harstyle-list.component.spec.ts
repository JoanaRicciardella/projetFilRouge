import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarstyleListComponent } from './harstyle-list.component';

describe('HarstyleListComponent', () => {
  let component: HarstyleListComponent;
  let fixture: ComponentFixture<HarstyleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarstyleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarstyleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
