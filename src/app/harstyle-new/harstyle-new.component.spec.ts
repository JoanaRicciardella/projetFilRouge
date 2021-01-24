import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarstyleNewComponent } from './harstyle-new.component';

describe('HarstyleNewComponent', () => {
  let component: HarstyleNewComponent;
  let fixture: ComponentFixture<HarstyleNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarstyleNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarstyleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
