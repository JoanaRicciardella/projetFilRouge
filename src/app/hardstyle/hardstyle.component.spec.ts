import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardstyleComponent } from './hardstyle.component';

describe('HardstyleComponent', () => {
  let component: HardstyleComponent;
  let fixture: ComponentFixture<HardstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HardstyleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
