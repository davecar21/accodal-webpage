import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeConversionComponent } from './time-conversion.component';

describe('TimeConversionComponent', () => {
  let component: TimeConversionComponent;
  let fixture: ComponentFixture<TimeConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeConversionComponent]
    });
    fixture = TestBed.createComponent(TimeConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
