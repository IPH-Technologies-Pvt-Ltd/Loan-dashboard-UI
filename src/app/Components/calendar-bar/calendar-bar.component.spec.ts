import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBarComponent } from './calendar-bar.component';

describe('CalendarBarComponent', () => {
  let component: CalendarBarComponent;
  let fixture: ComponentFixture<CalendarBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
