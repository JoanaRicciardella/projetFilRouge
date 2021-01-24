import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarstyleModifComponent } from './harstyle-modif.component';

describe('HarstyleModifComponent', () => {
  let component: HarstyleModifComponent;
  let fixture: ComponentFixture<HarstyleModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarstyleModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarstyleModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
